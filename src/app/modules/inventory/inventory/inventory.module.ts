import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from './inventory-routing.module';

import { CategoryComponent } from '../components/category/category/category.component';
import { ProductListComponent } from '../components/product/components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product/components/product-detail/product-detail.component';
import { ProductAddComponent } from '../components/product/components/product-add/product-add.component';
import { ProductUpdateComponent } from '../components/product/components/product-update/product-update.component';
import { WarehouseComponent } from '../components/warehouse/warehouse/warehouse.component';
import { StorageComponent } from '../components/storage/storage/storage.component';
import { MovementsComponent } from '../components/movements/movements/movements.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    WarehouseComponent,
    StorageComponent,
    MovementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRoutingModule
  ],
  exports: [
    CategoryComponent,
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
