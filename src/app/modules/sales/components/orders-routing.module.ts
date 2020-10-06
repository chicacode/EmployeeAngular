import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderAddComponent } from './order/order-add/order-add.component';


const routes: Routes = [
    { path: 'addorder', component: OrderAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule{}
