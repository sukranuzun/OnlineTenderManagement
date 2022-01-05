import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'OnlineTenderManagement';
  user:string = 'Şükran Uzun';
  tender:any={tenderId:1,categoryId:1, uniPrice:50}
}
