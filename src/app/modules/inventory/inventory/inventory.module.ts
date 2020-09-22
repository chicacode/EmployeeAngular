import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';

import { CategoryComponent } from '../components/category/category/category.component';
import { ProductListComponent } from '../components/product/components/product-list/product-list.component';
import { WarehouseComponent } from '../components/warehouse/warehouse/warehouse.component';
import { StorageComponent } from '../components/storage/storage/storage.component';
import { MovementsComponent } from '../components/movements/movements/movements.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  exports: [
    CategoryComponent,
    ProductListComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ]
})
export class InventoryModule { }
