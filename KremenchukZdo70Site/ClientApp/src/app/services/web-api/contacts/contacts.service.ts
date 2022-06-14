import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ContactsDataResponse } from '@shared/models/contacts-data-response';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getCollectiveAsync(): Observable<ContactsDataResponse[]> {
    return this.http.get<ContactsDataResponse[]>(
      `${this.baseUrl}api/ContactsData`
    );
  }
}
