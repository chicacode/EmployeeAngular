import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './orders-routing.module';


import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';


@NgModule({
  declarations: [
    OrderAddComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  exports: [
    OrderAddComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderUpdateComponent
  ]
})
export class OrdersModule { }
