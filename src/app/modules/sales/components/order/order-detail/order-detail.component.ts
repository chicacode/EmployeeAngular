import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../../../../../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order);
  }

  goBack(): void {
    // navigate backward one step in the browsers history using Location service i injected previously
    this.location.back();
  }

}
