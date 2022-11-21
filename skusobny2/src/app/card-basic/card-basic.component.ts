import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss']
})
export class CardBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() shownImage="";
  @Input() shownTitle="";

}


