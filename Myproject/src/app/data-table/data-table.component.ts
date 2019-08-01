import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { from } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditproductComponent} from '../editproduct/editproduct.component'




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

  constructor(private productservice:ProductService,
    public dialog: MatDialog,
    ) { }

   
  
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

// for edit datatable
   openEditDialog(): void {
    const dialogRef = this.dialog.open(EditproductComponent, {
      width: '800px',height:'800px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  getEditFormValue(element){
    let input=[];
    let data={'proId':element.proId,'proName':element.proName,'proPrice':element.proPrice,'proImage':element.proImage}
    input.push(data);
    localStorage.setItem('editData',  JSON.stringify( input));

    return element;
  }



  







         
   }









