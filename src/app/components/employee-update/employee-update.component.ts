import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeForm: FormGroup;
  employeeId; any;
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
      Salary: ['', Validators.required]
    });

    this.getEmployee();

    }

    upData(employee: Employee): any{
      this.employeeForm.patchValue({
        Name: employee.name,
        LastName: employee.lastname,
        PositionJob: employee.positionJob,
        Salary: employee.salary
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
      console.log('Hoola ' + typeof this.employeeId);

      employee.employeeId = this.employeeId;
      this.employeeService.updateEmployee(employee)
      .subscribe (() => this.goBack());
    }
}
