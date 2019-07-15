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
  proId:string="";
  proName:string="";
  proPrice:string= "";

  constructor(private formbilder:FormBuilder ) { 
    this.signupForm=formbilder.group({
      proId:new FormControl(),
      proName:new FormControl(),
      proPrice:new FormControl()

    });
  }

  ngOnInit() {
  }

   addProductData(signupForm:NgForm){
      console.log(signupForm.controls);
   }
}
