import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [
    CommonModule,
    DataTableRoutingModule
  ]
})
export class DataTableModule { }
