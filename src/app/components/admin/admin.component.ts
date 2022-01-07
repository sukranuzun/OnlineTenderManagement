import { Component, OnInit } from '@angular/core';
import { TenderResponseModel } from 'src/app/models/tenderResponseModel';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

/*   tenders;
  model: TenderResponseModel;
 */
  constructor() {
/*     this.model = new TenderResponseModel();
    this.tenders = this.model.getTenders(); */
  }

  ngOnInit(): void {
  }

}
