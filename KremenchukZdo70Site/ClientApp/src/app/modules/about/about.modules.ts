import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about/about.component';
import { CollectiveComponent } from './components/collective/collective.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '@base/services/core.module';
import { InformationOpennessComponent } from './components/information-openness/information-openness.component';
import { RegulatoryFrameworkComponent } from './components/regulatory-framework/regulatory-framework.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AboutComponent,
    CollectiveComponent,
    InformationOpennessComponent,
    RegulatoryFrameworkComponent,
    EmployeeComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule, CoreModule],
})
export class AboutModule {}
