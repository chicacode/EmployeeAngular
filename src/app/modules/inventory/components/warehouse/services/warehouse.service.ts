import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Warehouse } from '../../../../../models/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private url: string;
  public Warehouse: Warehouse;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient ) {
    this.url = 'https://localhost:44342/api/warehouses';
  }

  getWarehouses(): Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(this.url)
    .pipe(
      catchError(this.handleError<Warehouse[]>('getWarehouses', []))
    );
  }

  getWarehouse(id: number): Observable<Warehouse> {
    const url = `${this.url}/${id}`;
    return this.http.get<Warehouse>(url)
    .pipe(
      catchError(this.handleError<Warehouse>(`getWarehouse id=${id}`))
    );
  }

  addWarehouse(warehouse: Warehouse): Observable<Warehouse>{
    return this.http.post<Warehouse>(this.url, warehouse, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addWarehouse'))
    );
  }

  updateWarehouse(warehouse: Warehouse): Observable<Warehouse>{
    const url = `${this.url}/${warehouse.WarehouseId}`;
    return this.http.put<Warehouse>(url, warehouse, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateWarehouse'))
      );
  }

  deleteWarehouse(id: number): Observable<Warehouse>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Warehouse>(url);
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
