import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { CollectiveItemComponent } from './components/collective-item/collective-item.component';

@NgModule({
  declarations: [ContactsComponent, CollectiveItemComponent],
  imports: [RouterModule, CommonModule],
  exports: [ContactsComponent, CollectiveItemComponent],
})
export class SharedModule {}
