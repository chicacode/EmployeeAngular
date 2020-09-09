import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

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

  constructor( private route: ActivatedRoute, private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      PositionJob: ['', Validators.required],
      Salary: ['', Validators.required]
    });

    this.getEmployee();
    this.route.params.subscribe(params => {
      this.employeeId = params.id;
      console.log('tiene ID');
      this.employeeService.getEmployee(this.employeeId.toString())
      .subscribe(data => {
        this.loadForm(data), console.log("En la creacion");
      } );
    });
    }

    loadForm(employee: Employee): any{
      this.employeeForm.patchValue({
        Name: employee.name,
        LastName: employee.lastname,
        PositionJob: employee.positionJob,
        Salary: employee.salary
    });
  }

    update(): void{
      console.log('Editando de nuevo my love');
    }

    getEmployee(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService.getEmployee(id)
        .subscribe(employee => this.employee = employee);
    }

  // onSubmit(): void {
  //   this.setIDtoStringInForm();
  //   this.employeeService.addEmployee(this.employeeForm.value);
  // }
  // setIDtoStringInForm(): void{
  //   // tslint:disable-next-line: max-line-length
  //   this.employeeForm.setValue({ Name: this.employeeForm.value.Name, LastName: this.employeeForm.value.LastName, PositionJob: this.employeeForm.value.PositionJob, Salary: this.employeeForm.value.Salary } );
  // }

}
