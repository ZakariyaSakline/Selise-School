import { Injectable, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }


  getLocalEmployee():any{
    let localParseArray = JSON.parse(localStorage.getItem('employees'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }


   getLocalcompany():any{
    let localParseArray = JSON.parse(localStorage.getItem('company'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }


}
