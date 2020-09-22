import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from '../components/category/category/category.component';
import { MovementsComponent } from '../components/movements/movements/movements.component';
import { ProductComponent } from '../components/product/product/product.component';
import { StorageComponent } from '../components/storage/storage/storage.component';
import { WarehouseComponent } from '../components/warehouse/warehouse/warehouse.component';

const routes: Routes = [
    { path: 'category', component: CategoryComponent},
    { path: 'movements', component: MovementsComponent},
    { path: 'products', component: ProductComponent },
    { path: 'storage', component: StorageComponent},
    { path: 'warehouse', component: WarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule{}