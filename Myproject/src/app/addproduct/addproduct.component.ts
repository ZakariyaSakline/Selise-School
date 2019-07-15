import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  title="Add Product Form";

  signupForm:FormGroup;
  ProductId:string="";
  ProductName:string="";
  ProductPrice:string= "";
  

  constructor(private formbilder:FormBuilder ) { 
    this.signupForm = formbilder.group({
      proId:['',Validators.required],
      proName:['',Validators.required],
      proPrice:['',Validators.required],
     

    });
  }

  ngOnInit() {
  }
   addProductData(signupForm:any){
     debugger;
    let input=[];

    this.ProductId =signupForm.controls.proId.value;
    this.ProductName =signupForm.controls.proName.value;
    this.ProductPrice =signupForm.controls.proPrice.value;


    let data={'proId':this.ProductId,'proName':this.ProductName,'proPrice':this.ProductPrice}
    input.push(data);
    console.log(input);
    return input;
   }
}
