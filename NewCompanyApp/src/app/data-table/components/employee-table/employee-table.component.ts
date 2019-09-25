import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { AddEmployeesComponent } from '../add-employees/add-employees.component'

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(
    public _dialog: MatDialog,

  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 


  ngOnInit() {
  }


  openAddEmployeeDialog(): void {
    const dialogRef = this._dialog.open(AddEmployeesComponent, {
      width: '650px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
     
    });
  }






}
