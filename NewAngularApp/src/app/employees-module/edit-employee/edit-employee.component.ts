import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ShareDataService} from '../../share-data.service'




@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  signupForm: FormGroup;
  employeeId:number;
  employeeName:string="";
  employeeAge:number;
  employeeAddress:string="";
  employeeImage:string="";


  constructor(
    private formbilder:FormBuilder,
    private _shareDataService: ShareDataService,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    // for shareing Data
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  getEmployeeData(): void {
    this.signupForm = this.formbilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      employeeAge: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      employeeImage: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getEmployeeData();
    this.data;
    console.log(this.data.employeeId)
    this.signupForm.setValue({
      "employeeId":this.data.employeeId,
      "employeeName":this.data.employeeName,
      "employeeAge":this.data.employeeAge,
      "employeeAddress":this.data.employeeAddress,
      "employeeImage":this.data.employeeImage


  });
  }

}
