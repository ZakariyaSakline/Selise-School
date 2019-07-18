import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



export interface PeriodicElement {

  proEdit:string;
  proDelete:string;
  static:boolean;
}



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers:[ProductService]

})

export class DataTableComponent implements OnInit {

  constructor(private productservice:ProductService) { }


   jasonData:[]=this.productservice.getLocalStorageProduct();

   
   displayedColumns: string[] = ['proId','proImage', 'proName', 'proPrice', 'proEdit','proDelete'];
   dataSource = new MatTableDataSource(this.jasonData);
 
   @ViewChild(MatSort, {static: true}) sort: MatSort;

   ngOnInit() {
     this.dataSource.sort = this.sort;
   }

   applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }



}
