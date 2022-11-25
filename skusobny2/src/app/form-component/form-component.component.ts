import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  formLogin: FormGroup;
  username: FormControl;
  password: FormControl;
  userHandler: string = '';

  constructor(
    private httpService: HttpServiceService,
    private formBuilder: FormBuilder,
    ) {
    this.formLogin = formBuilder.group({
      userName: this.username,
      password: this.password,
    })
   }

  ngOnInit(): void {
    this.userHandler = this.httpService.nickName;
  }


  doLogOut(): void {
    this.httpService.nickName = '';
    this.userHandler = this.httpService.nickName;
  }

  doLogin(): void {
    setTimeout(() => {
      this.userHandler = this.httpService.nickName;
    }, 1000);
    this.httpService.autorizationUser( this.formLogin.get('userName').value, this.formLogin.get('password').value);
    console.log(this.userHandler, ' Je to tam');
    }

}
