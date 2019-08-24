import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import{ShareDataService} from '../../share-data.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[ShareDataService]

})
export class AddEmployeeComponent implements OnInit {
  input;
  signupForm: FormGroup;

  constructor(
    private formbilder: FormBuilder,
    private _shareDataService: ShareDataService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
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

  employeeSubmit(signupForm: any): any {
    this.addEmployeeData(signupForm);
    this.resetFrom();
  }
  addEmployeeData(signupForm: any): any {
      this.input= this._shareDataService.getLocalEmployee();
      let data = {
        'employeeId': signupForm.controls.employeeId.value,
        'employeeName': signupForm.controls.employeeName.value,
        'employeeAge': signupForm.controls.employeeAge.value,
        'employeeAddress': signupForm.controls.employeeAddress.value,
        'employeeImage': signupForm.controls.employeeImage.value
        }
      this.input.push(data);
      localStorage.setItem('employees', JSON.stringify(this.input));
  }

  resetFrom(): any {
    this.signupForm.patchValue({
      employeeId: '',
      employeeName: '',
      employeeAge: '',
      employeeAddress: '',
      employeeImage: ''
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
