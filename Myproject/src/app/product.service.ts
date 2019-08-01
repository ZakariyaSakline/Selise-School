import { Injectable, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'protractor';

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

      getLocalStorageAddCartProduct():any{
        
        let localArray = JSON.parse(localStorage.getItem('cartPro'));
          if (localArray) {
            return localArray;
          } else {
            return [];
            }
    }

    countCart():any{
      
      let localArray = JSON.parse(localStorage.getItem('cartPro'));
         if(localArray){
            return localArray.length;
         }else{
           return 0;
         }

    }
    

    getLocalStorageProDetailes():any{

      let localArray = JSON.parse(localStorage.getItem('proDetailes'));
          return localArray;
    }









}
