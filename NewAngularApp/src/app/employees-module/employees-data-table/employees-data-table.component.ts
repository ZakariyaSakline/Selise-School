import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddEmployeeComponent} from '../add-employee/add-employee.component'
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import{ShareDataService} from '../../share-data.service';
import { from } from 'rxjs';
import{EditEmployeeComponent} from '../edit-employee/edit-employee.component'


@Component({
  selector: 'app-employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css'],
  providers:[ShareDataService]

})
export class EmployeesDataTableComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _shareDataService:ShareDataService
  ) { }

  jasonData;
  displayedColumns;
  dataSource;
  employeeInfo;

  zakariya;

 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.jasonData= this._shareDataService.getLocalEmployee();
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName', 'employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._shareDataService.getUpdateEmployeeInfo().subscribe(x => {
      debugger;
      this.zakariya=x;
      // this.jasonData = this._shareDataService.getLocalEmployee();
      //eikhane backend call na diye jsonData k update korba
console.log(this.zakariya);
    })
  }
  openAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '800px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
     
    });
  }
// for editEmployee dialog
  openEditEmployeeDialog(employeeInfo): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: employeeInfo,
      width: '800px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The EditEmployee dialog was closed');
     
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    
  deleteProduct(element):any{

    let dataTable=this.jasonData;
      for(let i=0; i<dataTable.length; i++){

        if(dataTable[i].employeeId == element.employeeId){
            let indexValue=dataTable.indexOf(dataTable[i]);
            dataTable.splice(indexValue ,1);
              this.dataSource = new MatTableDataSource(this.jasonData);
              localStorage.setItem("employees" , JSON.stringify(dataTable));
      }
    }

   return this.jasonData;

  }

  // getEditEmployeeValue(employeeInfo){
  //   let dialogRef = this.dialog.open(EditEmployeeComponent, {
  //     data: employeeInfo,
  //   });
  // }




}
