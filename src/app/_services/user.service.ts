/*
     user service contains just a couple of methods
     for retrieving user data from the api, it acts
    as the interface between the Angular application
    and the backend api
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@app/models/user';

@Injectable({ providedIn: 'root' })

export class UserService {
    private apiUrl: string;
    constructor(private http: HttpClient) {
        this.apiUrl = 'https://localhost:44342/api';
     }

    // tslint:disable-next-line: typedef
    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    // tslint:disable-next-line: typedef
    getById(id: number) {
        return this.http.get<User>(`${this.apiUrl}/users/${id}`);
    }
}
