import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
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

  categories: Category[]=[];
  constructor( private categoryService: CategoryService ) {
  }
  ngOnInit(): void {
  }

}
