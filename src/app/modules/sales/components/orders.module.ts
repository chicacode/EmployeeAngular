import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './orders-routing.module';

import { OrderComponent } from './order/order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrdersModule { }
