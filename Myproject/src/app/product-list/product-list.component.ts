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

}
