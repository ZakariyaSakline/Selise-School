import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  providers:[ProductService,CartService]


})
export class EditproductComponent implements OnInit {

  title="Edit Product";

      signupForm:FormGroup;
      ProductId:number;
      ProductName:string="";
      ProductPrice:number;
      ProductImage:string="";



  constructor(private formbilder:FormBuilder,
    private productservice:ProductService,
    private cartService: CartService

    ) {


    this.signupForm = formbilder.group({
      proId:['',Validators.required],
      proName:['',Validators.required],
      proPrice:['',Validators.required],
      proImage:['',Validators.required]
    

    });
   }



 
   get_jeson_edit_form;

 
  ngOnInit() {
    this.get_jeson_edit_form = JSON.parse(localStorage.getItem('editData'));

      this.signupForm.setValue({
          "proId":this.get_jeson_edit_form[0].proId,
          "proName":this.get_jeson_edit_form[0].proName,
          "proPrice":this.get_jeson_edit_form[0].proPrice,
          "proImage":this.get_jeson_edit_form[0].proImage
  
      });
    
  }

          afterUpdateValue(signupForm:any){

            this.ProductId =this.get_jeson_edit_form[0].proId;
            this.ProductName =signupForm.controls.proName.value;
            this.ProductPrice =signupForm.controls.proPrice.value;
            this.ProductImage =signupForm.controls.proImage.value;

            let data={'proId':this.ProductId,'proName':this.ProductName,'proPrice':this.ProductPrice,'proImage':this.ProductImage}
            return data;
          }







  
  editPorductSubmit(signupForm:any):any{

          let input=this.productservice.getLocalStorageProduct();

          for(let i=0; i<input.length; i++){
            if(input[i].proId ==  this.get_jeson_edit_form[0].proId ){
                let indexValue=input.indexOf(input[i]);
                input. splice(indexValue ,1, this.afterUpdateValue(signupForm));
                localStorage.setItem('product', JSON.stringify(input));

              }
          }	

          this.resetFrom();
          debugger;
          this.cartService.emitUpdateProductEvent(10);
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










}
