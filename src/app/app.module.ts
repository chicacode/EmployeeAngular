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
import { ProductComponent } from './modules/inventory/components/product/product.component';
import { WarehouseComponent } from './modules/inventory/components/warehouse/warehouse.component';
import { StorageComponent } from './modules/inventory/components/storage/storage.component';
import { MovementsComponent } from './modules/inventory/components/movements/movements.component';
// import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
// import { EmployeesListComponent } from './components/employees-list/employees-list.component';
// import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
// import { EmployeeAddComponent } from './components/employee-add/employee-add.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // EmployeeDetailComponent,
    // EmployeesListComponent,
    // EmployeeUpdateComponent,
    // EmployeeAddComponent,
    HeaderComponent,
    FooterComponent,
    // ProductComponent,
    // WarehouseComponent,
    // StorageComponent,
    // MovementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
