import { Component, EventEmitter, Output } from '@angular/core';
import { CardData } from '../card-data.model'; //prečo nie 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];

  cards: CardData[] = [];
  
  myInt: number = 0; //prečo nemôže byť const???????????????????

  @Output() messageEvent = new EventEmitter<CardData>();
  message: CardData; 
  message2: string;

}
