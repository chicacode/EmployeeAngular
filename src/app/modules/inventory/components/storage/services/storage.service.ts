import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Storage } from '../../../../../models/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private url: string;
  public Storage: Storage;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient ) {
    this.url = 'https://localhost:44342/api/storages';
   }

   getStorages(): Observable<Storage[]>{
    return this.http.get<Storage[]>(this.url)
    .pipe(
      catchError(this.handleError<Storage[]>('getStorages', []))
    );
  }

  getStorage(id: number): Observable<Storage> {
    const url = `${this.url}/${id}`;
    return this.http.get<Storage>(url)
    .pipe(
      catchError(this.handleError<Storage>(`getStorage id=${id}`))
    );
  }

  addStorage(storage: Storage): Observable<Storage>{
    return this.http.post<Storage>(this.url, storage, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addStorage'))
    );
  }

  updateStorage(storage: Storage): Observable<Storage>{
    const url = `${this.url}/${storage.id}`;
    return this.http.put<Storage>(url, storage, this.httpOptions).pipe(
          catchError(this.handleError<any>('updateStorage'))
      );
  }

  deleteStorage(id: number): Observable<Storage>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Storage>(url);
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
