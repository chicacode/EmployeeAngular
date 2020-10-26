import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Customer } from '../../../../../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;


  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const customer: Customer = Object.assign({}, this.customerForm.value);
    console.log(customer);
    this.customerService.addCustomer(customer)
    .subscribe (() => this.goBack());
  }

}
