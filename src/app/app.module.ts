import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Helpers
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './register/register/register.component';

// Modules
import { EmployeeModule } from './modules/employee/employee.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { OrdersModule } from './modules/sales/components/orders.module';
import { CrmModule } from './modules/crm/crm.module';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
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
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
