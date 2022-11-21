import { Component, EventEmitter, Output } from '@angular/core';
import { CardData } from './card-data.model'; //prečo nie 


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

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });

    });

    this.cards = this.shuffleArray(this.cards);

}

ngOnInit(): void { //automaticky vždy sa zavolá ngOnit, preto sa doňho vkladá setupCards
  this.setupCards();
}


flippedCards: CardData[] = [];

cardClicked(index: number): void {
  const cardInfo = this.cards[index];

  if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
    cardInfo.state = 'flipped';
    this.flippedCards.push(cardInfo);

    if (this.flippedCards.length > 1) {
      this.checkForCardMatch();
    } 

  } else if (cardInfo.state === 'flipped') {
    cardInfo.state = 'default';
    this.flippedCards.pop();

  }
}

checkForCardMatch(): void {
  setTimeout(() => {
    const cardOne = this.flippedCards[0];
    const cardTwo = this.flippedCards[1];
    const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
    cardOne.state = cardTwo.state = nextState;
    this.flippedCards = [];
    if(cardOne.state=='matched' && cardTwo.state=='matched') { 
      this.playSound();
      this.myInt=this.myInt+100; 
      this.message=cardOne;
      //this.message2=cardOne.state;
      this.messageEvent.emit();
    }
}, 1000);
}

playSound() {
  let audio=new Audio();
  audio.src="../assets/kidsSong.mp3";
  audio.load(); audio.play();
}

title = 'login-page';

}

