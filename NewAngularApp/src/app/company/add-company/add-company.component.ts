import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import{ShareDataService} from '../../share-data.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{PassDAtaService} from '../../pass-data.service';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  input;
  signupForm: FormGroup;

  constructor(
    private formbilder: FormBuilder,
    private _shareDataService: ShareDataService,
    private _passDAtaService:PassDAtaService,
    public dialogRef: MatDialogRef<AddCompanyComponent>,
  ) { }

  getCompanyData(): void {
    this.signupForm = this.formbilder.group({
      companyId: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyImage: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getCompanyData();
  }

  companySubmit(signupForm: any): any {
    this.addCompanyData(signupForm);
  }

  addCompanyData(signupForm: any): any {
    this.input= this._shareDataService.getLocalcompany();
    let data = {
      'companyId': signupForm.controls.companyId.value,
      'companyName': signupForm.controls.companyName.value,
      'companyAddress': signupForm.controls.companyAddress.value,
      'companyImage': signupForm.controls.companyImage.value
      }
    this.input.push(data);
    this._passDAtaService.emitCompanyTableUpdateRowEvent(this.input);
    localStorage.setItem('company', JSON.stringify(this.input));
}

onNoClick(): void {
  this.dialogRef.close();
}






}
