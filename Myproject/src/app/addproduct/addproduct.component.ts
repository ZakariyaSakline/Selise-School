import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers:[ProductService]
})
export class AddproductComponent implements OnInit {

      title="Add Product Form";

      signupForm:FormGroup;
      ProductId:number;
      ProductName:string="";
      ProductPrice:number;
      ProductImage:string="";

    constructor(private formbilder:FormBuilder,private productservice:ProductService ) { 
      this.signupForm = formbilder.group({
        proId:['',Validators.required],
        proName:['',Validators.required],
        proPrice:['',Validators.required],
        proImage:['',Validators.required]
      

      });
    }



        ngOnInit() {
        }

  porductSubmit(signupForm:any):any{

    this.setLocalStorage(signupForm);
    this.addProductData(signupForm);
    this.resetFrom();

  }



        addProductData(signupForm:any):any{
          let input=this.productservice.getLocalStorageProduct();

          this.ProductId =signupForm.controls.proId.value;
          this.ProductName =signupForm.controls.proName.value;
          this.ProductPrice =signupForm.controls.proPrice.value;
          this.ProductImage =signupForm.controls.proImage.value;

          let data={'proId':this.ProductId,'proName':this.ProductName,'proPrice':this.ProductPrice,'proImage':this.ProductImage}
          input.push(data);
          return input;
        }



          resetFrom ():any {
            this.signupForm.patchValue({
                proId: '',
                proName:'',
                proPrice:'',
                proImage:''
      
            });
          }



           setLocalStorage(signupForm:any):any{
              let array_to_string = JSON.stringify( this.addProductData(signupForm));
                localStorage.setItem('product', array_to_string);
                       
           }
    















}


