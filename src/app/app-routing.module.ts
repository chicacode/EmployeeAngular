import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './models/enums/role';
import { OutputGraphComponent } from './components/output-graph/output-graph.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'login', component: LoginComponent },
  { path: 'graph', component: OutputGraphComponent },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./modules/sales/components/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./modules/crm/crm.module').then(m => m.CrmModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

