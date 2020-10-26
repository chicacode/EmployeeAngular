import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Order } from '../../../../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string;
  public order: Order;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {
    this.url = 'https://localhost:44342/api/orders';
   }

   getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url)
    .pipe(
      catchError(this.handleError<Order[]>('getOrders', []))
    );
  }

  deleteOrder(id: number): Observable<Order>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Order>(url);
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
