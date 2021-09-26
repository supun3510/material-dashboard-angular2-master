import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductionService } from 'app/services/production.service';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
    listProduction: any;
  constructor(private productionService:ProductionService ) { }

  ngOnInit() {
    this.productionService.listProduction().subscribe(data=>{
      this.listProduction = data;
      console.log(data);
      
    })
  }

  }
