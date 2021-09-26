import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl:string='https://jsonplaceholder.cypress.io/'
  constructor(private http:HttpClient) { }

  listBrand(){
    return this.http.get(this.baseUrl+'users')
  }
}
