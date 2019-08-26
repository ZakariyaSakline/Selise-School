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

  updateData;
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
    this.signupForm.setValue({
      "employeeId":this.data.employeeId,
      "employeeName":this.data.employeeName,
      "employeeAge":this.data.employeeAge,
      "employeeAddress":this.data.employeeAddress,
      "employeeImage":this.data.employeeImage
  });
  }


    
  afterUpdateValue(signupForm:any){
      this.employeeId =signupForm.controls.employeeId.value;
      this.employeeName =signupForm.controls.employeeName.value;
      this.employeeAge =signupForm.controls.employeeAge.value;
      this.employeeAddress =signupForm.controls.employeeAddress.value;
      this.employeeImage =signupForm.controls.employeeImage.value;
      this.updateData={
          'employeeId':this.employeeId,
          'employeeName':this.employeeName,
          'employeeAge':this.employeeAge,
          'employeeAddress':this.employeeAddress,
          'employeeImage':this.employeeImage
      }
      return this.updateData;
  }


updateEmployeeInfo(signupForm:any):any{
    let localData=this._shareDataService.getLocalEmployee();
        for(let i=0; i<localData.length; i++){
          if(localData[i].employeeId ==  this.data.employeeId ){
              let indexValue=localData.indexOf(localData[i]);
              localData. splice(indexValue ,1, this.afterUpdateValue(signupForm));
              localStorage.setItem('employees', JSON.stringify(localData));
            }
        }	
    // this.resetFrom();
    debugger;
    this._shareDataService.emitUpdateEmployeeInfo(10);
    return localData;
  }

  // resetFrom ():any {
  //   this.signupForm.patchValue({
  //       employeeId: '',
  //       employeeName:'',
  //       employeeAge:'',
  //       employeeAddress:'',
  //       employeeImage:'',
  //   });
  // }

  onNoClick(): void {
     this.dialogRef.close();
   }



}
