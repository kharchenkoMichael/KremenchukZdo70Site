import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './web-api/employee/employee.service';
import { ContactsService } from './web-api/contacts/contacts.service';
import { RegulatoryFrameworkService } from './web-api/regulatory-framework/regulatory-framework.service';
import { JobTitleService } from './web-api/job-title/job-title.service';
import { InformationOpenService } from './web-api/information-open/information-open.service';
import { AuthService } from './web-api/auth/auth.service';
import { ContentService } from './web-api/content/content.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // web-api
    EmployeeService,
    ContactsService,
    AuthService,
    InformationOpenService,
    JobTitleService,
    ContentService,
    RegulatoryFrameworkService,
  ],
})
export class CoreModule {}
