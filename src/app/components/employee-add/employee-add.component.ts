import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Send');
  }

}
