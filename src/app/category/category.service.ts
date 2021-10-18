import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string='http://supunsam-001-site1.btempurl.com/api/Category/'
  constructor(private http:HttpClient) { }

  listCategories(){
    return this.http.get(this.baseUrl+'GetCategories')
  }
}
