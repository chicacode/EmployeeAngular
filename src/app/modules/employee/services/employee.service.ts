import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Employee } from '../../../models/employee';


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
    this.url = 'https://localhost:44342/api/employees';
   }
// observer design pattern is a behavioral pattern.
// This pattern is used when there is is one to many relationship between objects such is one is
// modified the othe has to be notified
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
    .pipe(
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  getEmployee(id: number): Observable<Employee> {
    // return of(EMPLOYEES.find(employee => employee.EmployeeId === id));
    const url = `${this.url}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.url, employee, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addEmployee'))
    );
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    const url = `${this.url}/${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateEmployee'))
      );
  }

  deleteEmployee(id: number): Observable<Employee>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Employee>(url);
  }

  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
