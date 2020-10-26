import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/models/user';
import { AuthenticationService } from '@app/_services/authentication.service';
import { UserService } from '@app/_services/user.service';
import { Employee } from '@app/models/employee';
import { EmployeeService } from '../../../../modules/employee/services/employee.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  loading = false;
  user: User;
  userFromApi: User;
  employees: Employee[];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private employeeService: EmployeeService
  ) {
    this.user = this.authenticationService.userValue;
   }

  ngOnInit(): void {
    this.getUser();
    this.getEmployees();
  }

  getUser(): void{
    this.loading = true;
    this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
  }

  getEmployees(): void{
    // ASyncronous signature subscribe waith for the observable
    // The subscribe() method passes the emitted array to the callback
    this.employeeService.getEmployees().subscribe(
      response => {this.employees = response; console.log(response); },
      error => {console.log('There was a problem to get employees'); }
    );
  }
}
