import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddEmployeesComponent} from '../add-employees/add-employees.component'

@Component({
  selector: 'app-employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css']
})
export class EmployeesDataTableComponent implements OnInit {

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
  }
  // for add employees
  openAddEmployeesDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeesComponent, {
      width: '800px',height:'800px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}
