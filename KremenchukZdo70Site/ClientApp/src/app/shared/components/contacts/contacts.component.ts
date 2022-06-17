import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@base/services/web-api/contacts/contacts.service';
import { ContactsDataResponse } from '@shared/models/contacts-data-response';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public contacts: ContactsDataResponse[] = [];

  constructor(private readonly contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService
      .getContactsAsync()
      .subscribe((result) => (this.contacts = result));
  }
}
