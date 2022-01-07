import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Tender } from 'src/app/models/tender';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  getTender(): Tender[] {
    throw new Error('Method not implemented.');
  }

  tenders:Tender[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
