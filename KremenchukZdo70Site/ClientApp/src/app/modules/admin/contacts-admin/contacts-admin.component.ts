import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@base/services/web-api/contacts/contacts.service';
import { ContactsDataRequest } from '@shared/models/contacts-data-request';
import { ContactsDataResponse } from '@shared/models/contacts-data-response';

@Component({
  selector: 'app-contacts-admin',
  templateUrl: './contacts-admin.component.html',
  styleUrls: ['./contacts-admin.component.scss'],
})
export class ContactsAdminComponent implements OnInit {
  public contacts: ContactsDataResponse[] = [];

  constructor(private readonly contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService
      .getContactsAsync()
      .subscribe((result) => (this.contacts = result));
  }

  public remove(contact: ContactsDataResponse) {
    this.contacts.forEach((element, index) => {
      if (element == contact) this.contacts.splice(index, 1);
    });

    this.contactsService.deleteContactAsync(contact.id).subscribe();
  }

  public add() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }

    var contact = new ContactsDataResponse();
    contact.name = 'Назва за замовчуванням';
    contact.value = 'Значення за замовчуванням';
    this.contacts.push(contact);

    var request = new ContactsDataRequest();
    request.name = contact.name;
    request.value = contact.value;

    this.contactsService
      .createContactAsync(request)
      .subscribe((result) => (contact = result));
  }

  onNameFocusOutEvent(event: any, contact: ContactsDataResponse) {
    contact.name = event.target.value;

    var request = new ContactsDataRequest();
    request.id = contact.id;
    request.name = contact.name;
    request.value = contact.value;

    this.contactsService
      .updateContactAsync(request)
      .subscribe((result) => (contact = result));
  }

  onValueFocusOutEvent(event: any, contact: ContactsDataResponse) {
    contact.value = event.target.value;

    var request = new ContactsDataRequest();
    request.id = contact.id;
    request.name = contact.name;
    request.value = contact.value;

    this.contactsService
      .updateContactAsync(request)
      .subscribe((result) => (contact = result));
  }
}
