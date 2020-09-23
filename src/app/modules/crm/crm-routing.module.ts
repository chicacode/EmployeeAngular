import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressComponent } from './components/address/address/address.component';
import { CustomerAddComponent } from './components/customer/components/customer-add/customer-add.component';
import { CustomerDetailComponent } from './components/customer/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer/components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer/components/customer-update/customer-update.component';
import { PersonComponent } from './components/person/person/person.component';


const routes: Routes = [
    { path: 'address', component: AddressComponent},
    { path: 'addcustomer', component: CustomerAddComponent},
    { path: 'detailcus/:id', component: CustomerDetailComponent},
    { path: 'customers', component: CustomerListComponent},
    { path: 'updatecus/:id', component: CustomerUpdateComponent},
    { path: 'person', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule{}
