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
    {tenderId:1,categoryId:1, uniPrice:50, IsActive:true,categoryName:"Araba"},
    {tenderId:1,categoryId:1, uniPrice:50, IsActive:false,categoryName:"Araba"},
    {tenderId:1,categoryId:1, uniPrice:50, IsActive:true,categoryName:"Araba"},
    {tenderId:1,categoryId:1, uniPrice:50, IsActive:false,categoryName:"Araba"}
  ]
}
