import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDetailesComponent } from '../product-detailes/product-detailes.component'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]

})
export class ProductListComponent implements OnInit {
  jasonData: [] = this.productservice.getLocalStorageProduct();

  constructor(
    private productservice: ProductService,
    private _snackBar: MatSnackBar,
    private cartService: CartService,
    public dialog: MatDialog) {
  }

  ngOnInit() { }

  addCart(id: number, quantity: number, name: string, image: string, price: number) {
    this.set_cartProduct_LocalStorage(id, quantity, name, image, price);
    this.cartProduct(id, quantity, name, image, price);
    this.cartService.emitNavChangeEvent(10);
  }

  cartProduct(id: number, quantity: number, name: string, image: string, price: number): any {
    let cart_product = this.productservice.getLocalStorageAddCartProduct();
    let data = { 'proId': id, 'proQuantity': quantity, 'proName': name, 'proPrice': price, 'proImage': image }
    let check: string;
    let check1: string;
    if (cart_product.length > 0) {
      for (let i = 0; i < cart_product.length; i++) {
        if (cart_product[i].proId == id) {
          check = "true";
          // cart_product.push(data);
        } else {
          check1 = "false";
        }
      }
    } else if (cart_product.length == 0) {
      cart_product.push(data);

    }
    if (check != "true" && check1 == "false") {
      cart_product.push(data);

    }
    return cart_product;
  }

  set_cartProduct_LocalStorage(id: number, quantity: number, name: string, image: string, price: number) {
    let array_to_string = JSON.stringify(this.cartProduct(id, quantity, name, image, price));
    localStorage.setItem('cartPro', array_to_string);
  }

  proDetailes(id: number, name: string, image: string, price: number) {
    let data = { 'proId': id, 'proName': name, 'proPrice': price, 'proImage': image }
    localStorage.setItem('proDetailes', JSON.stringify(data));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDetailesComponent, {
      width: '800px', height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }














}
