import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ResponseUserCategory } from '../interfaces/ResponseUserCategory';
import { UsersCategory } from '../interfaces/users-category';
import { ResponseUserInterface } from '../interfaces/response-user.interface';
import { FormComponentComponent } from '../form-component/form-component.component';

@Injectable({providedIn: 'root'})
export class HttpServiceService {
  approvedCategory: Observable<ResponseUserCategory[]> | undefined;
  createdUsersCategory: Observable<UsersCategory> | undefined;
  responseUserAktual: object;
  nickName = '';

  URLCategoryByName = 'http://localhost:8080/category/AllCategoryByName?nickName=';
  sendCategoryUrl = 'http://localhost:8080/category/create?nickName=';
  urlAuthentification = 'http://localhost:8080/home';
  urlAuthentificationGet = 'http://localhost:8080/login';
  updateScoreUser = 'http://localhost:8080/score/add?username=';
  registrationUrl = 'http://localhost:8080/registration/newUser';



  responseUser: ResponseUserInterface;

 

  constructor(
    private httpClient: HttpClient
    ) { }


    registrationUser(username: string, password: string): void {
      this.httpClient.post<ResponseUserInterface>(this.registrationUrl, {username, password}).subscribe(response => {
        console.log(response);
        this.nickName = response.username;
        this.responseUser = response;
        sessionStorage.setItem('id','' + this.responseUser.id);
        sessionStorage.setItem('username',this.responseUser.username);
        sessionStorage.setItem('password',this.responseUser.password);
        sessionStorage.setItem('score','' + this.responseUser.score);
      },
      (error) => {
        alert('User existuje, prihlaste sa.');
      });
    }

  updateUserScore(score: number): void {
    this.httpClient.post<string>(this.updateScoreUser+this.nickName+'&score='+score,score).subscribe(response => {
      console.log(response);
      this.responseUser.score = Number(response);
    },
    (error) => {
      console.log(error);
      console.log(' score sa neulozilo. ');
    })
  }

  getAllApprovedCategoryByName(): void{
    this.approvedCategory =  this.httpClient.get<ResponseUserCategory[]>(this.URLCategoryByName+this.nickName);
  }

  createNewApprovedCategory(catName: string): void {
    this.createdUsersCategory = this.httpClient.post<UsersCategory>(this.sendCategoryUrl+this.nickName+'&categoryName='+catName, this.nickName);
    this.createdUsersCategory.subscribe(obj => {
      console.log(obj);
    }, 
    (error) => {
      console.log(' uz existuje');
    })
  }

  autorizationUser(userName: string, password: string): void {
    this.httpClient.post<ResponseUserInterface>('http://localhost:8080/login/run', {username: userName, password}).subscribe( 
      (response) => { 
        this.nickName = userName;
        this.responseUser = response;
        console.log(this.responseUser.username)
        sessionStorage.setItem('id','' + this.responseUser.id);
        sessionStorage.setItem('username',this.responseUser.username);
        sessionStorage.setItem('password',this.responseUser.password);
        sessionStorage.setItem('score','' + this.responseUser.score);
        console.log(' Prihlaseny', response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}