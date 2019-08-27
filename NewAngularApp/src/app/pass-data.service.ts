import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDAtaService {

  constructor() { }



  tableupdate: EventEmitter<any> = new EventEmitter();
  tableupdateRow: EventEmitter<any> = new EventEmitter();

  emitTableUpdateEvent(employeeInfo: any) {
    this.tableupdate.emit(employeeInfo);
  }

  getTableUpdateEvent() {
    return this.tableupdate;
  }

  // emitUpdateEmployeeInfo(newData: any) {
  //   this.changeEmployeeInfo.emit(newData);
  // }
  // getUpdateEmployeeInfo() {
  //   return this.changeEmployeeInfo;
  // }

  emitTableUpdateRowEvent(input:any){
    this.tableupdateRow.emit(input);
  }
  getTableUpdateRowEvent() {
    return this.tableupdateRow;
  }




}
