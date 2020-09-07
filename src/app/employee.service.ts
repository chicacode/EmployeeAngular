import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { EMPLOYEES } from './fake-employees';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[]{
    console.log("Retornando empleados");
    return EMPLOYEES;
  }
}
