import { Component } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]

})

export class AppComponent {


  constructor(private productservice:ProductService) { 
  }

      
  count:number =this.productservice.countCart();

  ngOnInit() {
  }


}
