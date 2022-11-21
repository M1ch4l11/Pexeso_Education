import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dict',
  templateUrl: './my-dict.component.html',
  styleUrls: ['./my-dict.component.scss']
})
export class MyDictComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

public arrays:Array<any> = [this.animals, this.things1, this.things2, this.things3 ]; //prečo vadilo, keď string
//public arrays:Array<any> = [animals, things1, things2, things3 ]; číta ako slovo (pozn. Mareka s úvodzovkami)

public numbers:Array<number> = [0,1,2,3];
public numbers2:Array<number> = [0,1,2,3];

}
