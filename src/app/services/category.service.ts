import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { Category } from '../models/category';
import { ListResponceModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl='https://localhost:44310/api/Categories/getall';

  constructor(private httpClient: HttpClient) { }

  getCategory():Observable<ListResponceModel<Category>>{
    return this.httpClient.get<ListResponceModel<Category>>(this.apiUrl);
  }
}
