import { Component, OnInit,Input } from '@angular/core';
import { CardData } from '../card-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: CardData[];


}