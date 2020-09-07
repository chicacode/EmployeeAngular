import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent,  },
  { path: 'addemployee', component: EmployeeAddComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
