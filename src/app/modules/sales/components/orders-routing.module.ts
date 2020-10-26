import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';

const routes: Routes = [
    { path: 'addorder', component: OrderAddComponent },
    { path: 'detailor/:id', component: OrderDetailComponent },
    { path: 'updateor/:id', component: OrderUpdateComponent },
    { path: 'orders', component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule{}
