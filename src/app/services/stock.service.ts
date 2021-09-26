import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl:string='https://jsonplaceholder.cypress.io/'
  constructor(private http:HttpClient) { }

  listStock(){
    return this.http.get(this.baseUrl+'users')
  }
}
