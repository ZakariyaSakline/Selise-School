import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { from } from 'rxjs';



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
  // paginator: MatPaginator;

  constructor(private productservice:ProductService) { }


   jasonData:[]=this.productservice.getLocalStorageProduct();

   
   displayedColumns: string[] = ['proImage','proId', 'proName', 'proPrice', 'proEdit','proDelete'];
   dataSource = new MatTableDataSource(this.jasonData);
 
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;   
    }

   applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }



}