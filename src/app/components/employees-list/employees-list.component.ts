import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import {EmployeeService} from '../../employee.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // expose the  EMPLOYEES array for binding.
  // interface type Employee
  employees: Employee[];
  // employee: Employee = {
  //   EmployeeId: 1,
  //   Name: 'Tony',
  //   LastName: 'Stark',
  //   PositionJob: 'Iron Man',
  //   Salary: 20.000
  // };

  selectedEmployee: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  // Dependency injection
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

}
