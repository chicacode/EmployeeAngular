import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'addemployee', component: EmployeeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
