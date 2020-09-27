import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../../../../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string;
  public category: Category;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:44342/api/categories';
   }

   getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url)
    .pipe(
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.url}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
        catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.url, category, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addCategory'))
    );
  }

  updateCategory(category: Category): Observable<Category>{
    const url = `${this.url}/${category.categoryId}`;
    return this.http.put<Category>(url, category, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateCategory'))
      );
  }

  deleteCategory(id: number): Observable<Category>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Category>(url);
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
