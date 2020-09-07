import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { EMPLOYEES } from './fake-employees';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]>{
    console.log('Retornando empleados');
    return of (EMPLOYEES);
  }
}
