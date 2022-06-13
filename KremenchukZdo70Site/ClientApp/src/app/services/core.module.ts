import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './web-api/employee/employee.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // web-api
    EmployeeService,
  ],
})
export class CoreModule {}
