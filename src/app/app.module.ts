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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
