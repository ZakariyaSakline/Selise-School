import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';
import { ShareDataService} from '../../../services/share-data.service';
import { EventEmitterService } from '../../../services/event-emitter.service';
import{ EditTableInfoComponent } from '../../components/edit-table-info/edit-table-info.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  jasonData;
  displayedColumns;
  dataSource;


  constructor(
    public _dialog: MatDialog,
    private _shareDataService:ShareDataService,
    private _eventEmitterService:EventEmitterService

  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 


  ngOnInit() {
    this.jasonData= this._shareDataService.getLocalEmployee();
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._eventEmitterService.getTableUpdateRowEvent().subscribe(newEmployeeInfo=>{
      this.reloadTableForAddRowEvent(newEmployeeInfo);
    });
  }


  openAddEmployeeDialog(): void {
    const dialogRef = this._dialog.open(AddEmployeesComponent, {
      width: '650px',height:'700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
    });
  }

  openEditEmployeeDialog(employeeInf): void {
    const dialogRef = this._dialog.open(EditTableInfoComponent, {
      data :employeeInf,
      width: '650px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The EditEmployee dialog was closed');
     
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTableForAddRowEvent(newEmployeeInfo){
    this.jasonData= newEmployeeInfo;
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
