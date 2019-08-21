import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesDataTableComponent } from './employees-data-table/employees-data-table.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesDataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
