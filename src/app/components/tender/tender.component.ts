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

  tenders:Tender[] = [];
  model: CategoryComponent;

  constructor() {
    this.model = new CategoryComponent
  }

  ngOnInit(): void {
  }

}
