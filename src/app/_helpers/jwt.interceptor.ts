import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@app/_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private url: string;
    constructor(private authenticationService: AuthenticationService, private http: HttpClient) {
        this.url = 'https://localhost:44342/api';
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(this.url);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(request);
    }
}
