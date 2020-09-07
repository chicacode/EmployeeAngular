import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../employee.service';
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
  selectedEmployee: Employee;
 // Dependency injection private property
 constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  getEmployees(): void{
    // Syncronous signature subscaribe waith for the observable
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }


}
