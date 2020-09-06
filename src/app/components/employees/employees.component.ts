import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // interface type Employee
  employee: Employee = {
    id: 1,
    name: 'Tony',
    lastName: 'Stark',
    positionJob: 'Iron Man',
    salary: 20.000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
