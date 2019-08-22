import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  input;
  signupForm: FormGroup;

  constructor(
    private formbilder: FormBuilder,
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
      this.input ;
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







}