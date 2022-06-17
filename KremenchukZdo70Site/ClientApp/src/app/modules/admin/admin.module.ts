import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '@base/services/core.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CollectiveAdminComponent } from './collective-admin/collective-admin.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { InformationOpennessAdminComponent } from './information-openness-admin/information-openness-admin.component';
import { RegulatoryFrameworkAdminComponent } from './regulatory-framework-admin/regulatory-framework-admin.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CollectiveAdminComponent,
    ContactsAdminComponent,
    InformationOpennessAdminComponent,
    RegulatoryFrameworkAdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, CoreModule],
})
export class AdminModule {}
