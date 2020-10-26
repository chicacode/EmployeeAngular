import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Order } from '../../../../../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      orderNumber: ['', Validators.required],
      orderPriority: ['', Validators.required],
      orderState: ['', Validators.required],
      creationOrder: ['', Validators.required],
      doneByEmployeeOrder:  ['', Validators.required],
      orderCompleted:  ['', Validators.required],
      addressId: ['', Validators.required],
      customerId:  ['', Validators.required],
      employeeId:  ['', Validators.required]
    });
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const order: Order = Object.assign({}, this.orderForm.value);
    console.log(order);
    this.orderService.addOrder(order)
    .subscribe (() => this.goBack());
  }
}
