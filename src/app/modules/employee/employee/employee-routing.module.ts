import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailComponent } from '../components/employee-detail/employee-detail.component';
import { EmployeesListComponent } from '../components/employees-list/employees-list.component';
import { EmployeeAddComponent } from '../components/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from '../components/employee-update/employee-update.component';

const routes: Routes = [
    { path: 'detail/:id', component: EmployeeDetailComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: 'addemployee', component: EmployeeAddComponent },
    { path: 'update/:id', component: EmployeeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule{}
