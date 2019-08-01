import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  providers:[ProductService]

})
export class CartDetailsComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  jasonData:any=this.productservice.getLocalStorageAddCartProduct();

  displayedColumns: string[] = ['proImage','proId','proQuantity', 'proName', 'proPrice','Increase_Decrease','proDelete'];
  dataSource = new MatTableDataSource(this.jasonData);


  ngOnInit() {
    

  }


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
              localStorage.setItem("cartPro" , JSON.stringify(cartData));
      }
    }
   return this.jasonData;

  }






}
