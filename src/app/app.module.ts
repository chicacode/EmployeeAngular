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
import { EmployeeModule } from './modules/employee/employee.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { OrdersModule } from './modules/sales/components/orders.module';
import { CrmModule } from './modules/crm/crm.module';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    InventoryModule,
    OrdersModule,
    CrmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
