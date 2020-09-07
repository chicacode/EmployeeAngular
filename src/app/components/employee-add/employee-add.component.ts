import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      PositionJob: ['', Validators.required],
      Salary: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.setIDtoStringInForm();
    this.employeeService.addEmployee(this.employeeForm.value);
  }
  setIDtoStringInForm(): void{
    // tslint:disable-next-line: max-line-length
    this.employeeForm.setValue({ Name: this.employeeForm.value.Name, LastName: this.employeeForm.value.LastName, PositionJob: this.employeeForm.value.PositionJob, Salary: this.employeeForm.value.Salary } );
  }
}
