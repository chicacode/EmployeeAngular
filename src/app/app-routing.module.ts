import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory/inventory.module').then(m => m.InventoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

