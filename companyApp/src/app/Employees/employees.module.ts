import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesDataTableComponent } from './employees-data-table/employees-data-table.component';


@NgModule({
  declarations: [EmployeesDataTableComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { 
  constructor() {
    console.log('Employees module working');
   }
}
