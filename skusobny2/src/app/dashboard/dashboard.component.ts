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
    url1= "../../assets/animalsNext1.jpg";
    url2="../../assets/apple.png";
    url3="../../assets/school.jpg";
    url4="../../assets/R.png";
    text1="Animals";
    text2="Fruits";
    text3="School items";
    text4="Flags";
    tempClick(cardNumber : number){
      //alert("I work!" + cardNumber);
    }
  
  constructor(
    private httpService: HttpServiceService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('username') === null){this.router.navigate(['/products']);}
  }

}

