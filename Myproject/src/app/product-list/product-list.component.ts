import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]

})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { 
  }

      jasonData:[]=this.productservice.getLocalStorageProduct();
      

  ngOnInit() {
    
  }


    addCart(id:number,quantity:number,name:string,image:string,price:number){
      
        this.set_cartProduct_LocalStorage(id,quantity,name,image,price);
        this.cartProduct(id,quantity,name,image,price);
    }



   cartProduct(id:number,quantity:number,name:string,image:string,price:number):any{

      let cart_product=this.productservice.getLocalStorageAddCartProduct();
      let data={'proId':id,'proQuantity':quantity,'proName':name,'proPrice':price,'proImage':image}
      let check:string;
      let check1:string;
        if(cart_product.length > 0){
          for(let i=0; i<cart_product.length; i++){
              if(cart_product[i].proId == id ){
                  check="true";
                  // cart_product.push(data);
              }else{
                check1="false";
              }

            
        }
      }else if( cart_product.length == 0){
        cart_product.push(data);

      } 
       if(check != "true" && check1 == "false"){
        cart_product.push(data);

      }
          

          return cart_product;
   }

   set_cartProduct_LocalStorage(id:number,quantity:number,name:string,image:string,price:number){
    let array_to_string = JSON.stringify(this.cartProduct(id,quantity,name,image,price));
        localStorage.setItem('cartPro', array_to_string);
             
    }










}
