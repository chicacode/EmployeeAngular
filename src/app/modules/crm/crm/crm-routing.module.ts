import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressComponent } from '../components/address/address/address.component';
import { CustomerComponent } from '../components/customer/customer/customer.component';
import { PersonComponent } from '../components/person/person/person.component';


const routes: Routes = [
    { path: 'address', component: AddressComponent},
    { path: 'customers', component: CustomerComponent},
    { path: 'person', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule{}
