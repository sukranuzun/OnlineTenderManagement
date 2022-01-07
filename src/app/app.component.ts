import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'OnlineTenderManagement';
  user:string = 'Şükran Uzun';

  tenders = [
    {tenderId:1,categoryId:1, unitPrice:50, IsActive:true,categoryName:"Araba"},
    {tenderId:1,categoryId:1, unitPrice:50, IsActive:false,categoryName:"Ev"},
    {tenderId:1,categoryId:1, unitPrice:50, IsActive:true,categoryName:"Antika Ürünler"},
    {tenderId:1,categoryId:1, unitPrice:50, IsActive:false,categoryName:"Arsa"}
  ];

  categories = [
    {categoryId:1, categoryName:"Araba"},
    {categoryId:2, categoryName:"Ev"},
    {categoryId:3, categoryName:"Antika Ürün"},
    {categoryId:4, categoryName:"Arsa"}
  ];
}
