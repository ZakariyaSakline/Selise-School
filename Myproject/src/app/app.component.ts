import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]

})

export class AppComponent {


  constructor(
    private productservice: ProductService,
    private cartService: CartService
    ) { 
  }

      
  count:number =this.productservice.countCart();
  ngOnInit() {
    this.cartService.getNavChangeEmitter().subscribe(response => {
      this.count = this.productservice.countCart();
    })
  }


}
