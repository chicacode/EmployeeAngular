import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from './inventory-routing.module';

import { MovementsComponent } from './components/movements/movements/movements.component';
import { ProductListComponent } from './components/product/components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product/components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product/components/product-update/product-update.component';
import { WarehouseComponent } from './components/warehouse/warehouse/warehouse.component';
import { StorageComponent } from './components/storage/storage/storage.component';
import { StorageAddComponent } from './components/storage/storage-add/storage-add.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent,
    StorageAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ]
})
export class InventoryModule { }
