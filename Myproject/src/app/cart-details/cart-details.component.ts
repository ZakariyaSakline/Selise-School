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

  jasonData:[]=this.productservice.getLocalStorageAddCartProduct();

  displayedColumns: string[] = ['proImage','proId','proQuantity', 'proName', 'proPrice','Increase_Decrease','proDelete'];
  dataSource = new MatTableDataSource(this.jasonData);


  ngOnInit() {
  }


  increaseQuantity(jasonData:[],id:number):any{
    console.log(id);

  }


}
