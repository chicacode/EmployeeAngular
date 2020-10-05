import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './orders-routing.module';

import { OrderComponent } from './order/order/order.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderAddComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderUpdateComponent
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
