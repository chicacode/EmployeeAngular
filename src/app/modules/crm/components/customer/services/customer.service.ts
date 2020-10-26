import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from '../../../../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;
  public customer: Customer;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
   this.url = 'https://localhost:44342/api/customers';
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url)
    .pipe(
      catchError(this.handleError<Customer[]>('getCustomers', []))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    // return of(CustomerS.find(Customer => Customer.CustomerId === id));
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url)
      .pipe(
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.url, customer, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addCustomer'))
    );
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    const url = `${this.url}/${customer.id}`;
    return this.http.put<Customer>(url, customer, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateCustomer'))
      );
  }

  deleteCustomer(id: number): Observable<Customer>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Customer>(url);
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
