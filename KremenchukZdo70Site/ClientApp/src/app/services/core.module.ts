import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './web-api/employee/employee.service';
import { ContactsService } from './web-api/contacts/contacts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // web-api
    EmployeeService,
    ContactsService,
  ],
})
export class CoreModule {}
