// Use to login and logout of the application and allow access to logged in user
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private url: string;
    private baseUrl: string;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private router: Router,
        private http: HttpClient
        ){
            this.userSubject =  new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
            this.user = this.userSubject.asObservable();
            this.url = 'https://localhost:44342/api/users/authenticate';
            this.baseUrl = 'https://localhost:44342/api/users/register';
        }
    public get userValue(): User {
        return this.userSubject.value;
    }

    // tslint:disable-next-line: typedef
    login(username: string, password: string){
        return this.http.post<User>(this.url, {username, password}, this.httpOptions)
        .pipe(map(user => {
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(user));
             this.userSubject.next(user);
             return user;
        }));
    }

    // tslint:disable-next-line: typedef
    register(account: User) {
        return this.http.post(this.baseUrl, account);
    }
    // tslint:disable-next-line: typedef
    logout(){
        // remove user from Local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
