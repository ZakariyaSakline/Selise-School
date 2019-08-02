import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import { CartService } from '../cart.service';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  providers:[ProductService]

})
export class CartDetailsComponent implements OnInit {

  constructor(
    private productservice:ProductService,
    private cartService: CartService
    ) { }

  // jasonData:any=this.productservice.getLocalStorageAddCartProduct();

  // displayedColumns: string[] = ['proImage','proId','proQuantity', 'proName', 'proPrice','Increase_Decrease','proDelete'];
  // dataSource = new MatTableDataSource(this.jasonData);


  ngOnInit() {
    
  }
  jasonData: any=this.productservice.getLocalStorageAddCartProduct();

  displayedColumns: string[] = ['proImage','proId','proQuantity', 'proName', 'proPrice','Increase_Decrease','proDelete'];
  dataSource = new MatTableDataSource(this.jasonData);

  increaseQuantity(id:number):any{
    let cartData=this.jasonData;

      for(let i=0; i<cartData.length;i++){

         if(cartData[i].proId == id){
           ++ cartData[i].proQuantity ;
              localStorage.setItem('cartPro', JSON.stringify(cartData));
          }
      }
  }


  decreaseQuantity(id:number):any{

    let cartData=this.jasonData;

      for(let i=0; i<cartData.length;i++){

         if(cartData[i].proId == id && cartData[i].proQuantity>1){
           -- cartData[i].proQuantity ;
              localStorage.setItem('cartPro', JSON.stringify(cartData));
          }
      }
  }


  removeCart(id:number):any{


    let cartData=this.jasonData;
      for(let i=0; i<cartData.length; i++){
        if(cartData[i].proId == id){
            let indexValue=cartData.indexOf(cartData[i]);
              cartData.splice(indexValue ,1);
              this.dataSource = new MatTableDataSource(this.jasonData);
              localStorage.setItem("cartPro" , JSON.stringify(cartData));
      }
    }
    this.cartService.emitNavChangeEvent(10);

   return this.jasonData;

  }






}
