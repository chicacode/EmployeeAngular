import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../../../../../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {
  orderForm: FormGroup;
  order: Order;
  orderId: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private location: Location ) { }

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

    this.getOrder();
  }

  upData(order: Order): any{
    this.orderForm.patchValue({
      Id: order.id,
      orderNumber: order.orderNumber,
      orderPriority: order.orderPriority,
      OrderState: order.orderState,
      creationOrder: order.creationOrder,
      doneByEmployeeOrder: order.doneByEmployeeOrder,
      orderCompleted: order.orderCompleted,
      addressId: order.addressId,
      customerId: order.customerId,
      employeeId: order.employeeId
    });
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderId = id;
    this.orderService.getOrder(this.orderId.toString())
      .subscribe(order => {
        this.order = order;
        this.upData(order);
        console.log(this.order);
      });
  }

  goBack(): void {
    this.location.back();
  }

  update(): void{
    const order: Order = Object.assign({}, this.orderForm.value);
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderId = id;
    // tslint:disable-next-line: radix
    this.orderId = parseInt( this.orderId );

    order.id = this.orderId;
    this.orderService.updateOrder(order)
    .subscribe (() => this.goBack());
  }

}
