import { Component, OnInit } from '@angular/core';
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
  ProductId:number;
  ProductName:string="";
  ProductPrice:number;
  ProductImage:string="";

  constructor(
    private formbilder:FormBuilder,
    private _shareDataService: ShareDataService,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
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
  }

}
