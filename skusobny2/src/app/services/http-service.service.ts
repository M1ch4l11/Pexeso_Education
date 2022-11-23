import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ResponseUserCategory } from '../interfaces/ResponseUserCategory';
import { UsersCategory } from '../interfaces/users-category';

@Injectable({providedIn: 'root'})
export class HttpServiceService {
  approvedCategory: Observable<ResponseUserCategory[]> | undefined;
  createdUsersCategory: Observable<UsersCategory> | undefined;

  // nickName treba vytiahnut
  nickName = 'Robo';

  URLCategoryByName = 'http://localhost:8080/category/AllCategoryByName?nickName=';
  sendCategoryUrl = 'http://localhost:8080/category/create?nickName=';

  constructor(private httpClient: HttpClient) { }

  // treba nadstavit nickname
  getAllApprovedCategoryByName(): void{
    this.approvedCategory =  this.httpClient.get<ResponseUserCategory[]>(this.URLCategoryByName+this.nickName);
  }

  // ak dana kategoria existuje, back-end vracia hodnotu null
  // treba nadstavit categorie v DB
  // vytvaranie comp. => launch => 173line
  createNewApprovedCategory(catName: string): void {
    this.createdUsersCategory = this.httpClient.post<UsersCategory>(this.sendCategoryUrl+this.nickName+'&categoryName='+catName, this.nickName);
  }
}