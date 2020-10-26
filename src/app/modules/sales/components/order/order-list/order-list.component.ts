import { Component, OnInit } from '@angular/core';

import { Order } from '../../../../../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  selectedOrder: Order;
  orders: Order[];

  constructor(private orderService: OrderService ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
    this.orderService.getOrders().subscribe(
      response => { this.orders = response; console.log(response)},
      error => {console.log('There was a problem to get orders'); }
    );
  }

  delete(id: number): void{
    this.orderService.deleteOrder(id).subscribe(data => {
      alert('Order with ID ' + id + ' has been deleted');
      location.reload();
    });
  }
}
