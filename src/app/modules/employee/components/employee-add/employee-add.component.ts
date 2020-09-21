import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '../../../../models/employee';
import { EmployeeService } from '../../../../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee;

  constructor(
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
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const employee: Employee = Object.assign({}, this.employeeForm.value);
    console.log(employee);
    this.employeeService.addEmployee(employee)
    .subscribe (() => this.goBack());
  }

}
