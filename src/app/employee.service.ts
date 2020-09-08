import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee';
import { EMPLOYEES } from './fake-employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employee: Employee;

  constructor() { }
// observer design pattern is a behavioral pattern.
// This pattern is used when there is is one to many relationship between objects such is one is
// modified the othe has to be notified
  getEmployees(): Observable<Employee[]>{
    return of (EMPLOYEES);
  }

  getEmployee(id: number): Observable<Employee> {
    return of(EMPLOYEES.find(employee => employee.EmployeeId === id));
  }

  addEmployee(employee: Employee): void{
      EMPLOYEES.push(employee);
  }

}
