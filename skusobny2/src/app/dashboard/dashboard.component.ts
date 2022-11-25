import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    title = 'options-page';
    url1= "../../assets/placeholder.png";
    url2="../../assets/placeholder.png";
    url3="../../assets/placeholder.png";
    url4="../../assets/nice.jpg";
    text1="Hra1";
    text2="Hra2";
    text3="Hra3";
    text4="Hra4";
    tempClick(cardNumber : number){
      //alert("I work!" + cardNumber);
      
    }
  
  constructor(
    private httpService: HttpServiceService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.httpService.nickName === ''){this.router.navigate(['/products']);}
  }

}

