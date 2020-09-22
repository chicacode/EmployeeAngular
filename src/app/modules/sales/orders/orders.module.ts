import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './orders-routing.module';

import { OrderComponent } from '../components/order/order/order.component';
import { OrderPriorityComponent } from '../components/order-priority/order-priority/order-priority.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderPriorityComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    OrderComponent,
    OrderPriorityComponent
  ]
})
export class OrdersModule { }
