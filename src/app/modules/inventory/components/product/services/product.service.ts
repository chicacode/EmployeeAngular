import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../../../../../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;
  public Product: Product;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient ){
    this.url = 'https://localhost:44333/api/products';
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
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
