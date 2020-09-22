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

  getProduct(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct(product: Product): Observable<Product>{
    const url = `${this.url}/${product.productId}`;
    return this.http.put<Product>(url, product, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateProduct'))
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
