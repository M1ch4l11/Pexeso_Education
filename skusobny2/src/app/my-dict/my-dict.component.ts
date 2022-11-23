import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { ResponseUserCategory } from '../interfaces/ResponseUserCategory';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-my-dict',
  templateUrl: './my-dict.component.html',
  styleUrls: ['./my-dict.component.scss']
})
export class MyDictComponent implements OnInit {
  responseCategoryNameArray: string[];

  constructor(
    private httpService: HttpServiceService
  ) { }

  
  public animals: Array<any> = [
    { title: "animals", description: "book desc 1", number: 0},
    { title: "book2", description: "book desc 2", number: 1},
    { title: "book3", description: "book desc 3", number: 2 },
    { title: "book4", description: "book desc 4 ", number: 3 }
  ];

  public things1: Array<any> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];

  public things2: Array<any> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "vypisanie" },
    { title: "book4", description: "book desc 4 " }
  ];

public things3: Array<any> = [
  { title: "book1", description: "book desc 1" },
  { title: "book2", description: "book desc 2" },
  { title: "book3", description: "book desc 3" },
  { title: "book4", description: "book desc 4 " }
];


public numbers:Array<number> = [0,1,2,3];
public numbers2:Array<number> = [0,1,2,3];


public arrays: Array<any> = []; 


  // Animals, Home, Vehicles, Planes

  ngOnInit(): void {
    this.httpService.getAllApprovedCategoryByName();
    this.httpService.approvedCategory.pipe(map(array => array.map(obj => obj.categoryName))).subscribe( array => {
        this.responseCategoryNameArray = array as string[];
        this.responseCategoryNameArray.forEach(nameCategory => {
          console.log(nameCategory);
          if(nameCategory === 'Animals'){this.arrays.push( this.animals)};
          if(nameCategory === 'Home'){this.arrays.push( this.things1)};
          if(nameCategory === 'Vehicles'){this.arrays.push(this.things2)};
          if(nameCategory === 'Planes'){this.arrays.push( this.things3)};
        });
      });
  }


  /*arrays: [
    animals: [
      { title: "book1", description: "book desc 1" },
      { title: "book2", description: "book desc 2" },
      { title: "book3", description: "book desc 3" },
      { title: "book4", description: "book desc 4 " }
    ],
  this.animals;
  ] */
//prečo vadilo, keď string
//public arrays:Array<any> = [animals, things1, things2, things3 ]; číta ako slovo (pozn. Mareka s úvodzovkami)


}
function foreach(arg0: (Array: any) => any) {
  throw new Error('Function not implemented.');
}

