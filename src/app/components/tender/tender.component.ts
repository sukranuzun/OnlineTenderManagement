import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css'],
  providers:[TenderService]
})
export class TenderComponent implements OnInit {
  tenders:Tender[] = [];
  dataLoaded = false;

  constructor(private tenderService:TenderService) {
  }

  ngOnInit(): void {
  }

  getTender(){
/*     this.tenderService.getTender.subscribe((response: { data: Tender[]; })=>{
      this.tenders = response.data;
      this.dataLoaded = true;
    }) */
  }

}
