import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/models/user';
import { Employee } from '@app/models/employee';
import { AuthenticationService } from '@app/_services/authentication.service';
import { UserService } from '@app/_services/user.service';
import { EmployeeService } from '../../modules/employee/services/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  loading = false;
  user: User;
  userFromApi: User;
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
      this.user = this.authenticationService.userValue;
     }

  // tslint:disable-next-line: typedef
  ngOnInit() {
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

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0, 4));
  }
}
