import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
   changeEmployeeInfo: EventEmitter<number> = new EventEmitter();

  emitUpdateEmployeeInfo(x: number) {
    debugger;
    this.changeEmployeeInfo.emit(x);
  }
  getUpdateEmployeeInfo() {
    debugger;
    return this.changeEmployeeInfo;
  }

  getLocalEmployee():any{
    let localParseArray = JSON.parse(localStorage.getItem('employees'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }



}
