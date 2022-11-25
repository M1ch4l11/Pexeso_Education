import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ResponseUserCategory } from '../interfaces/ResponseUserCategory';
import { UsersCategory } from '../interfaces/users-category';

// const httpOption = {
//   headers: new HttpHeaders({
//     'Content-type': 'application/json',
//     'Authorization': 'Basic ' + 'Michal:miso123' ,
//   })
// };

@Injectable({providedIn: 'root'})
export class HttpServiceService {
  approvedCategory: Observable<ResponseUserCategory[]> | undefined;
  createdUsersCategory: Observable<UsersCategory> | undefined;

  // nickName treba vytiahnut
  nickName = '';

  URLCategoryByName = 'http://localhost:8080/category/AllCategoryByName?nickName=';
  sendCategoryUrl = 'http://localhost:8080/category/create?nickName=';
  urlAuthentification = 'http://localhost:8080/home';
  urlAuthentificationGet = 'http://localhost:8080/login';

 

  constructor(
    private httpClient: HttpClient,
    ) { }

  // treba nadstavit nickname
  getAllApprovedCategoryByName(): void{
    this.approvedCategory =  this.httpClient.get<ResponseUserCategory[]>(this.URLCategoryByName+this.nickName);
  }

  // ak dana kategoria existuje, back-end vracia hodnotu null
  // treba nadstavit categorie v DB
  // vytvaranie comp. => launch => 173line
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
    this.httpClient.post('http://localhost:8080/login/run', {username: userName, password}).subscribe( 
      (response) => { 
        this.nickName = userName;
        console.log(' Prihlaseny');
      },
      (error) => {

      }
    )
  // response ? console.log('Prihlaseny') : console.log('Nespavne udaje');
  }
}