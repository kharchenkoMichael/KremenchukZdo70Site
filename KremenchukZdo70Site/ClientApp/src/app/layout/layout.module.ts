import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [LayoutComponent, AdminComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
