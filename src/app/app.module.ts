import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Modules
import { EmployeeModule } from './modules/employee/employee/employee.module';
import { InventoryModule } from './modules/inventory/inventory/inventory.module';
import { OrdersModule } from './modules/sales/orders/orders.module';
import { AddressComponent } from './modules/crm/components/address/address.component';
import { CustomerComponent } from './modules/crm/components/customer/customer.component';
import { PerComponent } from './modules/crm/components/per/per.component';
import { PersonComponent } from './modules/crm/components/person/person.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddressComponent,
    CustomerComponent,
    PerComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    InventoryModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
