import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  title = "Add Product";
  signupForm: FormGroup;
  input;

  constructor(
    private formbilder: FormBuilder, 
    private productservice: ProductService
    ) {}

  getData(): void {
    this.signupForm = this.formbilder.group({
      proId: ['', Validators.required],
      proName: ['', Validators.required],
      proPrice: ['', Validators.required],
      proImage: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getData();
  }

  porductSubmit(signupForm: any): any {
    this.addProductData(signupForm);
    this.setLocalStorage();
    this.resetFrom();
  }

  addProductData(signupForm: any): any {
    this.input = this.productservice.getLocalStorageProduct();
    let data = {
      'proId': signupForm.controls.proId.value,
      'proName': signupForm.controls.proName.value,
      'proPrice': signupForm.controls.proPrice.value,
      'proImage': signupForm.controls.proImage.value
    }
    this.input.push(data);
  }

  resetFrom(): any {
    this.signupForm.patchValue({
      proId: '',
      proName: '',
      proPrice: '',
      proImage: ''
    });
  }

  setLocalStorage(): void {
    localStorage.setItem('product', JSON.stringify(this.input));
  }
}


