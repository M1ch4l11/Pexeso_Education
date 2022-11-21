import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardData } from '../card-data.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

   title="";
   pocet: number = 0;
   text="";
  
    cardImages1 = [
      'pDGNBK9A0sk',
      'fYDrhbVlV1E',
      'qoXgaF27zBc',
      'b9drVB7xIOI',
      'TQ-q5WAVHj0'
    ];

    cardImages2 = [
      'pDGNBK9A0sk',
      'fYDrhbVlV1E',
      'qoXgaF27zBc',
      'b9drVB7xIOI',
      'TQ-q5WAVHj0'
    ];

    cardImages3 = [
      'pDGNBK9A0sk',
      'fYDrhbVlV1E',
      'qoXgaF27zBc',
      'b9drVB7xIOI',
      'TQ-q5WAVHj0'
    ];

    cardImages4 = [
      'pDGNBK9A0sk',
      'fYDrhbVlV1E',
      'qoXgaF27zBc',
      'b9drVB7xIOI',
      'TQ-q5WAVHj0'
    ];

    cardImages=[];
  
    

    cards: CardData[] = [];
    cards2: CardData[] = [];
    
    myInt: number = 0; //prečo nemôže byť const???????????????????
  
    @Output() messageEvent = new EventEmitter<CardData>();
    message: CardData; 
  
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

  constructor(private route: ActivatedRoute) { };
  

  
  ngOnInit(): void { //automaticky vždy sa zavolá ngOnit, preto sa doňho vkladá setupCards
  
      this.route.queryParams.subscribe(
        params => {
          this.title =  params['title'];
        }
      )

     this.fillingCards();
     this.setupCards();

   /* this.route.queryParamMap.pipe(map((paramMap: ParamMap) => {
      return paramMap.get('title');
    }), distinctUntilChanged()).subscribe(val => {
      this.param = val;
      // having changedetection.onPush activated you would need to call the 
      // cdR.markAsChecked() here
    }) */
  }

  fillingCards(): void {
   if(this.title=='animals') {
    for(let i=0;i<this.cardImages1.length; i++){
      this.cardImages.push(this.cardImages1[i])
    }
   }
    if(this.title=='things1') {
    for(let i=0;i<this.cardImages2.length; i++){
      this.cardImages.push(this.cardImages2[i])
    }
   }
    if(this.title=='things2') {
    for(let i=0;i<this.cardImages3.length; i++){
      this.cardImages.push(this.cardImages3[i])
    }
   }
    if(this.title=='things3') {
    for(let i=0;i<this.cardImages4.length; i++){
      this.cardImages.push(this.cardImages4[i])
    }
   }
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
        this.cards2.push(this.message);
       // this.messageEvent.emit();
       this.pocet++;
       if(this.pocet==5) {
         /*title sa pošle do back-end-u*/
         this.vypisanie();
         }
      }
  }, 1000);
  }
  
  playSound() {
    let audio=new Audio();
    audio.src="../assets/kidsSong.mp3";
    audio.load(); audio.play();
  }

  vypisanie(): void {
  this.text="Level skončený";
  
    }
  }
  
  
  
