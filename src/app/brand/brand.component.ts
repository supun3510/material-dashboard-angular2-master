import { Component, OnInit,ViewChild } from '@angular/core';
import { BrandService } from 'app/services/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  listBrand :any;
  constructor(private brand: BrandService ) { }

  ngOnInit() {
    $('#example').DataTable();
    this.brand.listBrand().subscribe(data=>{
      this.listBrand = data;
    })
  }

  }
