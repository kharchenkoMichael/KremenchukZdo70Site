import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@base/guard/auth.guard';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CollectiveAdminComponent } from './collective-admin/collective-admin.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { JobTitleAdminComponent } from './job-title-admin/job-title-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuItemAdminComponent } from './menu-item-admin/menu-item-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/collective',
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'collective',
        component: CollectiveAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'employee/:id',
        component: EmployeeAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts',
        component: ContactsAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'job-title',
        component: JobTitleAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'menu',
        component: MenuAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: MenuItemAdminComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
