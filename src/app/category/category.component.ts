import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  listCategories :any;
  constructor(private categoryService:CategoryService ) { }

  ngOnInit() {
    this.categoryService.listCategories().subscribe(data=>{
      this.listCategories = data;
      console.log(data);
      
    })
  }

  }
