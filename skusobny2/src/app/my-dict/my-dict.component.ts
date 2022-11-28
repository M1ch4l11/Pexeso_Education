import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ResponseUserCategory } from '../interfaces/ResponseUserCategory';
import { HttpServiceService } from '../services/http-service.service';
declare var anime: any;                               

@Component({
  selector: 'app-my-dict',
  templateUrl: './my-dict.component.html',
  styleUrls: ['./my-dict.component.scss']
})

export class MyDictComponent implements AfterViewInit {

  constructor(
   private httpService: HttpServiceService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: '.an-1 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: '.an-1',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: Infinity,
    });
  
  }

  ngOnInit(): void {
  if(sessionStorage.getItem('username') === null){this.router.navigate(['/products']);}
    this.httpService.getAllApprovedCategoryByName();
    this.httpService.approvedCategory.pipe(map(array => array.map(obj => obj.name))).subscribe( array => {
        this.responseCategoryNameArray = array as string[];
        this.responseCategoryNameArray.forEach(nameCategory => {
          console.log(nameCategory);
          if(nameCategory === 'Animals'){this.arrays.push( this.animals)};
          if(nameCategory === 'Fruits'){this.arrays.push( this.things1)};
          if(nameCategory === 'School items'){this.arrays.push(this.things2)};
          if(nameCategory === 'Flags'){this.arrays.push( this.things3)};
        });
      },
      (error) => {
        console.log(' my-dict.component.ts = pri povolenych kategorii sa nieco stalo. ');
      });
  }

  public animals: Array<any> = [
    { title: "pes", description: "dog", titleTopic: 'Animals'},
    { title: "mačka", description: "cat"},
    { title: "panda", description: "panda"},
    { title: "krava", description: "cow"},
    { title: "lev", description: "lion"}
  ];

  public things1: Array<any> = [
    { title: "hrozno", description: "grape",titleTopic: 'Fruits' },
    { title: "citrón", description: "lemon" },
    { title: "jahoda", description: "strawberry" },
    { title: "kiwi", description: "kiwi" },
    { title: "hruška", description: "pear" }
  ];

  public things2: Array<any> = [
    { title: "peračník", description: "pencil case", titleTopic: 'School items' },
    { title: "ceruzka", description: "pencil" },
    { title: "pero", description: "pen" },
    { title: "guma", description: "rubber" },
    { title: "taška", description: "bag" }
  ];

public things3: Array<any> = [
  { title: "Nemecko", description: "Germany", titleTopic: 'Flags' },
  { title: "Švédsko", description: "Sweden" },
  { title: "Švajčiarsko", description: "Switzerland" },
  { title: "Čína", description: "China" },
  { title: "Brazília", description: "Brazil" }
];

public arrays:Array<any> = [this.animals, this.things1, this.things2, this.things3 ]; 


}