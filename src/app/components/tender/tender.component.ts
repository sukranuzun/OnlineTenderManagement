import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  tenders:Tender[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
