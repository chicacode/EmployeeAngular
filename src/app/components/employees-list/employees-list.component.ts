import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../employee.service';


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
 constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.router.navigate(['/employeedetail']);
  }

  getEmployees(): void{
    // Syncronous signature subscaribe waith for the observable
    // The subscribe() method passes the emitted array to the callback
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }


}
