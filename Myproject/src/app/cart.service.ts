import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  
  navchange: EventEmitter <number> = new EventEmitter();

  emitNavChangeEvent(x: number) {
    this.navchange.emit(x);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }


}
