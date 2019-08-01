import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,NgForm } from '@angular/forms';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  providers:[ProductService]

})
export class EditproductComponent implements OnInit {

  title="Edit Product";

      signupForm:FormGroup;
      ProductId:number;
      ProductName:string="";
      ProductPrice:number;
      ProductImage:string="";



  constructor(private formbilder:FormBuilder,private productservice:ProductService) {


    this.signupForm = formbilder.group({
      proId:['',Validators.required],
      proName:['',Validators.required],
      proPrice:['',Validators.required],
      proImage:['',Validators.required]
    

    });
   }


   
  //  setFromValue ():any {
  //   this.signupForm.setValue({
  //       "proId": '11',
  //       "proName":'',
  //       "proPrice":'',
  //       "proImage":''

  //   });
  // }


 
  ngOnInit() {
  }
 









}
