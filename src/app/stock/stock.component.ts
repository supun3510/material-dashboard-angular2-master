import { Component, OnInit,ViewChild } from '@angular/core';
import { StockService } from 'app/services/stock.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
    listStock: any;
  constructor(private stockService:StockService ) { }

  ngOnInit() {
    $('#example').DataTable();
    this.stockService.listStock().subscribe(data=>{
      this.listStock = data;
      console.log(data);
      
    })
  }

  }
