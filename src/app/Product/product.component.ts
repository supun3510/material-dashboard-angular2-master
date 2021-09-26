import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from 'app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct :any;
  constructor(private productService:ProductService ) { }

  
  ngOnInit() {
    this.productService.listProduct().subscribe(data=>{
      this.listProduct = data;
    })
  }

  }
