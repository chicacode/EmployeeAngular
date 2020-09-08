import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './models/employee';
import { EMPLOYEES } from './fake-employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   // URL to web api
  private url: string;
  public employee: Employee;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {
    this.url = 'https://localhost:44333/api/Employees';
   }
// observer design pattern is a behavioral pattern.
// This pattern is used when there is is one to many relationship between objects such is one is
// modified the othe has to be notified
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
    console.log('En la respuesta');
  }

  getEmployee(id: number): Observable<Employee> {
    return of(EMPLOYEES.find(employee => employee.EmployeeId === id));
  }

  addEmployee(employee: Employee): void{
      EMPLOYEES.push(employee);
  }

}
