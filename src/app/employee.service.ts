import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { EMPLOYEES } from './fake-employees';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employee: Employee;

  constructor() { }
// observer design pattern is a behavioral pattern.
// This pattern is used when there is is one to many relationship between objects such is one is ///modified the othe has to be notified
  getEmployees(): Observable<Employee[]>{
    return of (EMPLOYEES);
  }

  addEmployee(employee: Employee): void{
      EMPLOYEES.push(employee);
      console.log('Añadiendo empleados');
  }



}
