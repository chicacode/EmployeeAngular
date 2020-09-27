import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Customer } from '../../../../../../models/customer';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  customerForm: FormGroup;
  customerId; any;
  customer: Customer;


  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      PersonId: ['', Validators.required],
      Name: ['', Validators.required],
      LastName: ['', Validators.required]
    });

    this.getCustomer();
  }

  upData(customer: Customer): any{
    this.customerForm.patchValue({
      PersonId: customer.PersonId,
      Name: customer.name,
      LastName: customer.lastName
  });
}
  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerId = id;
    this.customerService.getCustomer(this.customerId.toString())
      .subscribe(customer => {
        this.customer = customer;
        this.upData(customer);
      });
  }

  goBack(): void {
    this.location.back();
  }

  update(): void{
    const customer: Customer = Object.assign({}, this.customerForm.value);
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerId = id;
    // tslint:disable-next-line: radix
    this.customerId = parseInt( this.customerId );
    console.log( typeof this.customerId);

    customer.customerId = this.customerId;
    this.customerService.updateCustomer(customer)
      .subscribe (() => this.goBack());
  }

}
