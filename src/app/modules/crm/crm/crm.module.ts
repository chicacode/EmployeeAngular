import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from '../components/address/address.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { PersonComponent } from '../components/person/person.component';


@NgModule({
  declarations: [
    AddressComponent,
    CustomerComponent,
    PersonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressComponent,
    CustomerComponent,
    PersonComponent
  ]
})
export class CrmModule { }
