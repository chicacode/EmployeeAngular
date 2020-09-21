import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../components/product/product.component';
import { WarehouseComponent } from '../components/warehouse/warehouse.component';
import { StorageComponent } from '../components/storage/storage.component';
import { MovementsComponent } from '../components/movements/movements.component';
import { CategoryComponent } from '../components/category/category.component';

@NgModule({
  declarations: [
    ProductComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent,
    CategoryComponent
  ]
})
export class InventoryModule { }
