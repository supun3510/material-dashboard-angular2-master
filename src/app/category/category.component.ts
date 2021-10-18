import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoryService } from './category.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  listCategories :any;

  constructor(private categoryService:CategoryService ) { }

 

  ngOnInit() {
    $('#example').DataTable();
    this.categoryService.listCategories().subscribe(data=>{
      this.listCategories = data;
      console.log("getcato:",data)
    })
 
  }

}
