import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../components/product/product.component';
import { WarehouseComponent } from '../components/warehouse/warehouse.component';
import { StorageComponent } from '../components/storage/storage.component';
import { MovementsComponent } from '../components/movements/movements.component';

@NgModule({
  declarations: [
    ProductComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ]
})
export class InventoryModule { }
