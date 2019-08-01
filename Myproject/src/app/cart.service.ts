import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  
  navchange: EventEmitter <number> = new EventEmitter();
  updateProduct: EventEmitter<number> = new EventEmitter();

  emitNavChangeEvent(x: number) {
    this.navchange.emit(x);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }

  emitUpdateProductEvent(x: number) {
    this.navchange.emit(x);
  }
  getupdateProductEmitter() {
    return this.navchange;
  }
// delete cart table row

  // removeCart: EventEmitter <number> = new EventEmitter();

  // emitRemoveCartTableEvent(x: number) {
  //   this.removeCart.emit(x);
  // }
  // getRemoveCartTableEmitter() {
  //   return this.removeCart;
  // }







}
