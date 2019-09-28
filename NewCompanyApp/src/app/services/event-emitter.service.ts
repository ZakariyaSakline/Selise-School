import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

    addTableNewRow:EventEmitter<any>= new EventEmitter();


    emitTableSubmitEvent(employeeInfo:any){
      this.addTableNewRow.emit(employeeInfo);
    }
    getTableUpdateRowEvent(){
      return this.addTableNewRow;
    }




}
