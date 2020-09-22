import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../../../models/employee';
import { EmployeeService } from '../../../../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // interface type Employee
  selectedEmployee: Employee;
  employees: Employee[];

 // Dependency injection private property
 constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    console.log('Hoola', this.employeeService);
    this.getEmployees();
  }

  getEmployees(): void{
    // ASyncronous signature subscribe waith for the observable
    // The subscribe() method passes the emitted array to the callback
    this.employeeService.getEmployees().subscribe(
      response => {this.employees = response; console.log(response); },
      error => {console.log('There was a problem to get employees'); }
    );
    // .subscribe(employees => this.employees = employees);
  }

  delete(id: number): void{
    this.employeeService.deleteEmployee(id).subscribe(data => {
      alert('Employee with ID ' + id + ' has been deleted');
      location.reload();
    });
  }

}
