import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from '../components/order/order/order.component';
import { OrderPriorityComponent } from '../components/order-priority/order-priority/order-priority.component';


const routes: Routes = [
    { path: 'orders', component: OrderComponent },
    { path: 'order-priority', component: OrderPriorityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule{}
