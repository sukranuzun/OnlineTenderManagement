import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/listResponseModel';
import { Tender } from '../models/tender';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiUrl='https://localhost:44310/api/Tenders/getall';

  constructor(private httpClient: HttpClient) { }

  getTender():Observable<ListResponceModel<Tender>>{
    return this.httpClient.get<ListResponceModel<Tender>>(this.apiUrl);
  }
}
