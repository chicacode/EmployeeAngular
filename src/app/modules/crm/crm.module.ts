import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmRoutingModule } from './crm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressComponent } from './components/address/address/address.component';
import { CustomerAddComponent } from './components/customer/components/customer-add/customer-add.component';
import { CustomerDetailComponent } from './components/customer/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer/components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer/components/customer-update/customer-update.component';
import { PersonComponent } from './components/person/person/person.component';


@NgModule({
  declarations: [
    AddressComponent,
    CustomerAddComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressComponent,
    CustomerAddComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    PersonComponent
  ]
})
export class CrmModule { }
