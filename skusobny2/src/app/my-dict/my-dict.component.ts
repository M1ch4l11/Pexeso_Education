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

export class MyDictComponent implements AfterViewInit, OnInit {
  responseCategoryNameArray: string[];

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
          if(nameCategory === 'animals'){this.arrays.push( this.animals)};
          if(nameCategory === 'things1'){this.arrays.push( this.things1)};
          if(nameCategory === 'things2'){this.arrays.push(this.things2)};
          if(nameCategory === 'things3'){this.arrays.push( this.things3)};
        });
      },
      (error) => {
        console.log(' my-dict.component.ts = pri povolenych kategorii sa nieco stalo. ');
      });
  }

  public animals: Array<any> = [
    { title: "pes", description: "dog", titleTopic: 'Animals'},
    { title: "ma??ka", description: "cat"},
    { title: "panda", description: "panda"},
    { title: "krava", description: "cow"},
    { title: "lev", description: "lion"}
  ];

  public things1: Array<any> = [
    { title: "hrozno", description: "grape",titleTopic: 'Fruits' },
    { title: "citr??n", description: "lemon" },
    { title: "jahoda", description: "strawberry" },
    { title: "kiwi", description: "kiwi" },
    { title: "hru??ka", description: "pear" }
  ];

  public things2: Array<any> = [
    { title: "pera??n??k", description: "pencil case", titleTopic: 'School items' },
    { title: "ceruzka", description: "pencil" },
    { title: "pero", description: "pen" },
    { title: "guma", description: "rubber" },
    { title: "ta??ka", description: "bag" }
  ];

public things3: Array<any> = [
  { title: "Nemecko", description: "Germany", titleTopic: 'Flags' },
  { title: "??v??dsko", description: "Sweden" },
  { title: "??vaj??iarsko", description: "Switzerland" },
  { title: "????na", description: "China" },
  { title: "Braz??lia", description: "Brazil" }
];

public arrays:Array<any> = []; 


}