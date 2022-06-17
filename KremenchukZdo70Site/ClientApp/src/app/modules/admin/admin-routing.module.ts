import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CollectiveAdminComponent } from './collective-admin/collective-admin.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { InformationOpennessAdminComponent } from './information-openness-admin/information-openness-admin.component';
import { RegulatoryFrameworkAdminComponent } from './regulatory-framework-admin/regulatory-framework-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/collective',
        pathMatch: 'full',
      },
      {
        path: 'collective',
        component: CollectiveAdminComponent,
      },
      {
        path: 'contacts',
        component: ContactsAdminComponent,
      },
      {
        path: 'information-openness',
        component: InformationOpennessAdminComponent,
      },
      {
        path: 'regulatory-framework',
        component: RegulatoryFrameworkAdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
