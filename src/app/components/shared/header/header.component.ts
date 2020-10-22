import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../_services/authentication.service';
import { User } from '../../../models/user';
import { Role } from '../../../models/enums/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  user: User;
  title = 'Enterprise Resources Planning';
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
   }

   // tslint:disable-next-line: typedef
   get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

// tslint:disable-next-line: typedef
  logout() {
    this.authenticationService.logout();
  }
}
