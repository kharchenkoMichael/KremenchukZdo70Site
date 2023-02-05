import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '@base/services/core.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CollectiveAdminComponent } from './collective-admin/collective-admin.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { FormsModule } from '@angular/forms';
import { JobTitleAdminComponent } from './job-title-admin/job-title-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuItemAdminComponent } from './menu-item-admin/menu-item-admin.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CollectiveAdminComponent,
    ContactsAdminComponent,
    EmployeeAdminComponent,
    JobTitleAdminComponent,
    MenuAdminComponent,
    MenuItemAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],
})
export class AdminModule {}
