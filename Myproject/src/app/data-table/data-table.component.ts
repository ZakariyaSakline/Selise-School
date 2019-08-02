import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { from } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditproductComponent} from '../editproduct/editproduct.component'
import { CartService } from '../cart.service';




export interface PeriodicElement {

  proEdit:string;
  proDelete:string;
  static:boolean;
}



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers:[ProductService,CartService]

})

export class DataTableComponent implements OnInit {
  // paginator: MatPaginator;

  constructor(private productservice:ProductService,
    public dialog: MatDialog,
    private cartService: CartService

    ) { }

   
    jasonData;
    displayedColumns;
    dataSource;
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
    this.jasonData= JSON.parse(localStorage.getItem('product'));
    this.displayedColumns= ['proImage','proId', 'proName', 'proPrice', 'proEdit','proDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);
  
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;

     this.cartService.getUpdateProductEmitter().subscribe(response=>{
      this.jasonData= JSON.parse(localStorage.getItem('product'));
      this.displayedColumns= ['proImage','proId', 'proName', 'proPrice', 'proEdit','proDelete'];

      this.dataSource = new MatTableDataSource(this.jasonData);
      })
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



  deleteProduct(element):any{

    let cartData=this.jasonData;
      for(let i=0; i<cartData.length; i++){

        if(cartData[i].proId == element.proId){
            let indexValue=cartData.indexOf(cartData[i]);
              cartData.splice(indexValue ,1);
              this.dataSource = new MatTableDataSource(this.jasonData);
              localStorage.setItem("product" , JSON.stringify(cartData));
      }
    }

   return this.jasonData;

  }







         
   }









