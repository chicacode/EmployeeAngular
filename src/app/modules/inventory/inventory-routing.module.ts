import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { MovementsComponent } from './components/movements/movements/movements.component';
import { ProductListComponent } from './components/product/components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product/components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product/components/product-update/product-update.component';


import { StorageComponent } from './components/storage/storage/storage.component';
import { WarehouseComponent } from './components/warehouse/warehouse/warehouse.component';

const routes: Routes = [
    { path: 'categories', component: CategoryListComponent},
    { path: 'movements', component: MovementsComponent},
    { path: 'products', component: ProductListComponent },
    { path: 'detailpro/:id', component: ProductDetailComponent },
    { path: 'addproduct', component: ProductAddComponent },
    { path: 'updatepro/:id', component: ProductUpdateComponent },
    { path: 'storage', component: StorageComponent},
    { path: 'warehouse', component: WarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule{}
