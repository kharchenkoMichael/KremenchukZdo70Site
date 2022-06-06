import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { CollectiveComponent } from './components/collective/collective.component';

@NgModule({
  declarations: [ContactsComponent, CollectiveComponent],
  imports: [RouterModule, CommonModule],
  exports: [ContactsComponent, CollectiveComponent],
})
export class SharedModule {}
