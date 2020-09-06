import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EMPLOYEES } from '../../fake-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // interface type Employee
  employee: Employee = {
    EmployeeId: 1,
    Name: 'Tony',
    LastName: 'Stark',
    PositionJob: 'Iron Man',
    Salary: 20.000
  };

  // expose the  EMPLOYEES array for binding.
  employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {
  }

}
