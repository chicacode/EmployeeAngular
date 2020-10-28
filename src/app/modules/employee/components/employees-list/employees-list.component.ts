import { Component, OnInit } from '@angular/core';


import { Employee } from '@app/models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // interface type Employee
  employees: Employee[];
  isAdmin = false;

 // Dependency injection private property
 constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    // ASyncronous signature subscribe waith for the observable
    // The subscribe() method passes the emitted array to the callback
    this.employeeService.getEmployees().subscribe(
      response => {this.employees = response; console.log(response); this.isAdmin = true; },
      error => {console.log('There was a problem to get employees'); }
    );
  }

  delete(id: number): void{
    this.employeeService.deleteEmployee(id).subscribe(data => {
      alert('Employee with ID ' + id + ' has been deleted');
      location.reload();
    });
  }

}
