import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css'],
  providers:[ProductService]

})
export class ProductDetailesComponent implements OnInit {

  constructor(private productservice:ProductService) { }


  jasonDataDetailes:[]=this.productservice.getLocalStorageProDetailes();

  ngOnInit() {
   return this.jasonDataDetailes;
  }

}
