import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeAddComponent } from '../components/employee-add/employee-add.component';
import {EmployeeDetailComponent } from '../components/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from '../components/employee-update/employee-update.component';
import { EmployeesListComponent } from '../components/employees-list/employees-list.component';



@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
  exports: [
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent,
    EmployeesListComponent
  ]
})
export class EmployeeModule { }
