import { Component, OnInit } from '@angular/core';
import { Tender } from '../../models/tender';
import { TenderComponent } from '../tender/tender.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  getCategory(): import("../../models/tender").Tender[] {
    throw new Error('Method not implemented.');
  }

  tenders:Tender[] = [];
  model: TenderComponent;

  constructor() {
    this.model = new TenderComponent();
  }
  ngOnInit(): void {
  }

}
