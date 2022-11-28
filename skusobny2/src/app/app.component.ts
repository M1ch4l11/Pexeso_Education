import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from './services/http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private HttpService: HttpServiceService,
  ){}

  ngOnInit(): void {
    if(this.HttpService.nickName === ''){this.router.navigate(['/dashboard']);}  
  }

}

