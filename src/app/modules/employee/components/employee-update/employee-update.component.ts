import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '@app/models/employee';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeForm: FormGroup;
  employeeId: any;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private location: Location) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      PositionJob: ['', Validators.required],
      Salary: ['', Validators.required],
      UserName:  ['', Validators.required],
      Password:  ['', Validators.required]
    });

    this.getEmployee();

    }

    upData(employee: Employee): any{
      this.employeeForm.patchValue({
        Name: employee.name,
        LastName: employee.lastName,
        PositionJob: employee.positionJob,
        Salary: employee.salary,
        UserName: employee.userName,
        Password: employee.password
    });
  }

    getEmployee(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeId = id;
      this.employeeService.getEmployee(this.employeeId.toString())
        .subscribe(employee => {
          this.employee = employee;
          this.upData(employee);
        });
    }
    goBack(): void {
      this.location.back();
    }

    update(): void{
      const employee: Employee = Object.assign({}, this.employeeForm.value);
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeId = id;
      // tslint:disable-next-line: radix
      this.employeeId = parseInt( this.employeeId );
      console.log( typeof this.employeeId);

      employee.employeeId = this.employeeId;
      this.employeeService.updateEmployee(employee)
      .subscribe (() => this.goBack());
    }
}
