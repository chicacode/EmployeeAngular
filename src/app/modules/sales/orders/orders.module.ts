import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from '../components/order/order.component';
import { OrderPriorityComponent } from '../components/order-priority/order-priority.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderPriorityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderComponent,
    OrderPriorityComponent
  ]
})
export class OrdersModule { }
