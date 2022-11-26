import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseUserInterface } from '../interfaces/response-user.interface';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  formLogin: FormGroup;
  formRegister: FormGroup;
  username: FormControl;
  password: FormControl;
  userHandler: string = 'login';
  responseUser: ResponseUserInterface;
 

  constructor(
    private httpService: HttpServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
    this.formLogin = formBuilder.group({
      userName: this.username,
      password: this.password,
    })
    this.formRegister = formBuilder.group({
      userName: this.username,
      password: this.password,
    })
   }

  ngOnInit(): void {
    if(this.httpService.nickName){
      this.userHandler = 'profil';
    } else {
      this.userHandler = 'login';
    }
    this.responseUser = this.httpService.responseUser;
  }


  doLogOut(): void {
    this.httpService.nickName = '';
    this.userHandler = 'login';
  }

  doLogin(): void {
    setTimeout(() => {
      this.userHandler = 'profil';
      this.responseUser = this.httpService.responseUser;
      this.router.navigate(['/dashboard']);
      
    }, 1000);
    this.httpService.autorizationUser( this.formLogin.get('userName').value, this.formLogin.get('password').value);
    console.log(this.userHandler, ' Je to tam');
    }

    showRegForm(): void{
      this.userHandler = 'register';
    }

    doRegister(): void {
      setTimeout(() => {
        this.userHandler = 'profil';
        this.responseUser = this.httpService.responseUser;
        this.router.navigate(['/dashboard']);
      }, 1000);
      this.httpService.registrationUser( this.formRegister.get('userName').value, this.formRegister.get('password').value);
      console.log('zbehlo');
    }

}
