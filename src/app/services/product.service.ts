import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string='https://jsonplaceholder.cypress.io/'
  constructor(private http:HttpClient) { }

  listProduct(){
    return this.http.get(this.baseUrl+'users')
  }
}
