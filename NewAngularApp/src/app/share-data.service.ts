import { Injectable, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  //  changeEmployeeInfo: EventEmitter<any> = new EventEmitter();

  // emitUpdateEmployeeInfo(newData: any) {
  //   this.changeEmployeeInfo.emit(newData);
  // }
  // getUpdateEmployeeInfo() {
  //   return this.changeEmployeeInfo;
  // }

  getLocalEmployee():any{
    let localParseArray = JSON.parse(localStorage.getItem('employees'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }



}
