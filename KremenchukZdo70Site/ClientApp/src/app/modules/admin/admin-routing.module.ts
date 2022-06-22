import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@base/guard/auth.guard';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CollectiveAdminComponent } from './collective-admin/collective-admin.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { InformationOpennessAdminComponent } from './information-openness-admin/information-openness-admin.component';
import { RegulatoryFrameworkAdminComponent } from './regulatory-framework-admin/regulatory-framework-admin.component';

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
        path: 'contacts',
        component: ContactsAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'information-openness',
        component: InformationOpennessAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'regulatory-framework',
        component: RegulatoryFrameworkAdminComponent,
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
