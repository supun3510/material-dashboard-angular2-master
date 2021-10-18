import { Component, OnInit,ViewChild } from '@angular/core';
import { StockService } from 'app/services/stock.service';
@Component({
  selector: 'app-monthlySummary',
  templateUrl: './monthlySummary.component.html',
  styleUrls: ['./monthlySummary.component.css']
})
export class MonthlySummaryComponent implements OnInit {
    listStock: any;
  constructor(private stockService:StockService ) { }

  ngOnInit() {
    
  }

  }
