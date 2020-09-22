import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CrmRoutingModule } from './crm-routing.module';

import { AddressComponent } from '../components/address/address/address.component';
import { CustomerComponent } from '../components/customer/customer/customer.component';
import { PersonComponent } from '../components/person/person/person.component';


@NgModule({
  declarations: [
    AddressComponent,
    CustomerComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ],
  exports: [
    AddressComponent,
    CustomerComponent,
    PersonComponent
  ]
})
export class CrmModule { }
