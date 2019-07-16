import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

      getLocalStorageProduct():any{

          let localParseArray = JSON.parse(localStorage.getItem('product'));
            if (localParseArray) {
              return localParseArray;
            } else {
              return [];
              }
      }




}
