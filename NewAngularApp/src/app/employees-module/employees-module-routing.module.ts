import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeesDataTableComponent} from'./employees-data-table/employees-data-table.component'
import { from } from 'rxjs';

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
export class EmployeesModuleRoutingModule { }
