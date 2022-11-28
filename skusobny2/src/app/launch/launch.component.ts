import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardData } from '../card-data.model';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

   title="";
   pocet: number = 0;
   text="";
   sound="";
  
    cardImages1 = [
      {id: 'cat', sound:'../assets/cat.mp3', path:'../assets/Cat.png', preklad:'mačka', front:'../assets/animals.jpg' },
      {id: 'cat', sound:'../assets/cat.mp3', path:'../assets/Macka.png', preklad:'mačka' ,front:'../assets/animals.jpg'}, 
      {id: 'cow', sound:'../assets/cow.mp3', path:'../assets/Cow.png', preklad:'krava',front:'../assets/animals.jpg' },
      {id: 'cow', sound:'../assets/cow.mp3', path:'../assets/Krava.png', preklad:'krava',front:'../assets/animals.jpg' },
      {id: 'lion', sound:'../assets/lion.mp3', path:'../assets/Lion.png', preklad: 'lev',front:'../assets/animals.jpg' },
      {id: 'lion', sound:'../assets/lion.mp3', path:'../assets/Lev.png', preklad: 'lev',front:'../assets/animals.jpg' },
      {id: 'panda', sound:'../assets/panda.mp3', path:'../assets/Panda.png', preklad: 'panda',front:'../assets/animals.jpg' },
      {id: 'panda', sound:'../assets/panda.mp3', path:'../assets/Panda.png', preklad: 'panda',front:'../assets/animals.jpg' },
      {id: 'dog', sound:'../assets/dog.mp3', path:'../assets/Dog.png', preklad: 'pes',front:'../assets/animals.jpg' },
      {id: 'dog', sound:'../assets/dog.mp3', path:'../assets/Pes.png', preklad: 'pes',front:'../assets/animals.jpg' },
    ];

    cardImages2 = [
      {id: 'grape', sound:'../assets/grape.mp3', path:'../assets/grape1.jpg', preklad:'hrozno' ,front:'../assets/fruits.png'},
      {id: 'grape', sound:'../assets/grape.mp3', path:'../assets/grape2.jpg', preklad:'hrozno',front:'../assets/fruits.png' }, 
      {id: 'lemon', sound:'../assets/lemon.mp3', path:'../assets/lemon1.jpg', preklad:'citrón',front:'../assets/fruits.png' },
      {id: 'lemon', sound:'../assets/lemon.mp3', path:'../assets/lemon2.jpg', preklad:'citrón' ,front:'../assets/fruits.png'},
      {id: 'kiwi', sound:'../assets/kiwi.mp3', path:'../assets/kiwi1.jpg', preklad: 'kiwi',front:'../assets/fruits.png' },
      {id: 'kiwi', sound:'../assets/kiwi.mp3', path:'../assets/kiwi2.jpg', preklad: 'kiwi',front:'../assets/fruits.png' },
      {id: 'pear', sound:'../assets/pear.mp3', path:'../assets/pear1.jpg', preklad: 'hruška',front:'../assets/fruits.png' },
      {id: 'pear', sound:'../assets/pear.mp3', path:'../assets/pear2.jpg', preklad: 'hruška',front:'../assets/fruits.png' },
      {id: 'strawberry', sound:'../assets/strawberry.mp3', path:'../assets/strawberry1.jpg', preklad: 'jahoda',front:'../assets/fruits.png' },
      {id: 'strawberry', sound:'../assets/strawberry.mp3', path:'../assets/strawberry2.jpg', preklad: 'jahoda',front:'../assets/fruits.png' },
    ];

    cardImages3 = [
      {id: 'bag', sound:'../assets/bag.mp3', path:'../assets/Bag.png', preklad:'taška', front:'../assets/school.jpg' },
      {id: 'bag', sound:'../assets/bag.mp3', path:'../assets/Taska.png', preklad:'taška',front:'../assets/school.jpg' }, 
      {id: 'pencil', sound:'../assets/pencil.mp3', path:'../assets/Pencil.png', preklad:'ceruzka' ,front:'../assets/school.jpg'},
      {id: 'pencil', sound:'../assets/pencil.mp3', path:'../assets/Ceruzka.png', preklad:'ceruzka',front:'../assets/school.jpg' },
      {id: 'pen', sound:'../assets/pen.mp3', path:'../assets/Pen.png', preklad: 'pero',front:'../assets/school.jpg' },
      {id: 'pen', sound:'../assets/pen.mp3', path:'../assets/Pero.png', preklad: 'pero',front:'../assets/school.jpg' },
      {id: 'rubber', sound:'../assets/rubber.mp3', path:'../assets/Rubber.png', preklad: 'guma',front:'../assets/school.jpg' },
      {id: 'rubber', sound:'../assets/rubber.mp3', path:'../assets/Guma.png', preklad: 'guma',front:'../assets/school.jpg' },
      {id: 'pencil case', sound:'../assets/pencilcase.mp3', path:'../assets/Percanik.png', preklad: 'peračník',front:'../assets/school.jpg' },
      {id: 'pencil case', sound:'../assets/pencilcase.mp3', path:'../assets/Pencilcase.png', preklad: 'peračník',front:'../assets/school.jpg' },
    ];

    cardImages4 = [
      {id: 'China', sound:'../assets/china.mp3' ,front:'../assets/R.png',path:'../assets/china1_1.jpg', preklad:'Čína'},
      {id: 'Germany',  sound:'../assets/germany.mp3' ,front:'../assets/R.png',path:'../assets/germany1.jpg', preklad: 'Nemecko'},
      {id:'Sweden',sound:'../assets/sweden.mp3',front:'../assets/R.png',path:'../assets/sweden1.jpg', preklad:'Švédsko' },
      {id:'Switzerland', sound:'../assets/switzerland.mp3',front:'../assets/R.png',path:'../assets/switzerland1.jpg', preklad: 'Švajčiarsko'},
      {id:'Brazil', sound:'../assets/brazil.mp3',front:'../assets/R.png',path:'../assets/brazil1.jpg', preklad:'Brazília' },
      {id: 'China', sound:'../assets/china.mp3' ,front:'../assets/R.png',path:'../assets/china2.jpg', preklad:'Čína'},
      {id: 'Germany',  sound:'../assets/germany.mp3' ,front:'../assets/R.png',path:'../assets/germany2.jpg', preklad:'Nemecko'},
      {id:'Sweden',sound:'../assets/sweden.mp3',front:'../assets/R.png',path:'../assets/sweden2.jpg', preklad:'Švédsko' },
      {id:'Switzerland', sound:'../assets/switzerland.mp3',front:'../assets/R.png',path:'../assets/switzerland2.jpg', preklad:'Švajčiarsko' },
      {id:'Brazil', sound:'../assets/brazil.mp3',front:'../assets/R.png',path:'../assets/brazil2.jpg', preklad:'Brazília'},
    ];

    cardImages=[];
  
    

    cards: CardData[] = [];
    cards2: CardData[] = [];
    
    myInt: number = 0; 
  
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
          imageId: image.id,
          state: 'default',
          sound: image.sound,
          path: image.path,
          preklad: image.preklad,
          front: image.front
        };
  
        this.cards.push({ ...cardData });
        //this.cards.push({ ...cardData });
  
      });
  
      this.cards = this.shuffleArray(this.cards);
  
  }

  constructor(
  private route: ActivatedRoute,
  private HttpService: HttpServiceService,
  private router: Router,
  ) { };
  

  
  ngOnInit(): void { 
    if(this.HttpService.nickName === ''){this.router.navigate(['/dashboard']);}  
    this.route.queryParams.subscribe(
        params => {
          this.title =  params['title'];
        })
     this.fillingCards();
     this.setupCards();
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
        this.sound=cardOne.sound;
        this.playSound(this.sound);
        this.myInt=this.myInt+100; 
        this.message=cardOne;
        this.cards2.push(this.message);
       // this.messageEvent.emit();
       this.pocet++;
       if(this.pocet==5) {
         /*title sa pošle do back-end-u*/
         this.vypisanie();
         this.myInt += Number(sessionStorage.getItem('score'));
          sessionStorage.setItem('score', ''+this.myInt);
         console.log(this.title, this.myInt);
         this.HttpService.createNewApprovedCategory(this.title);
         this.HttpService.updateUserScore(this.myInt);
         }
      }
  }, 1000);
  }
  
  playSound(string) {
    let audio=new Audio();
    audio.src=this.sound;
    audio.load(); audio.play();
  }

  vypisanie(): void {
  this.text="Level skončený";
  
    }
  }