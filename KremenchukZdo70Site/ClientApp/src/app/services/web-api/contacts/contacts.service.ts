import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ContactsDataResponse } from '@shared/models/contacts-data-response';
import { ContactsDataRequest } from '@shared/models/contacts-data-request';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getContactsAsync(): Observable<ContactsDataResponse[]> {
    return this.http.get<ContactsDataResponse[]>(
      `${this.baseUrl}api/ContactsData`
    );
  }

  public getContactAsync(id: number): Observable<ContactsDataResponse> {
    return this.http.get<ContactsDataResponse>(
      `${this.baseUrl}api/ContactsData/${id}`
    );
  }

  public createContactAsync(request: ContactsDataRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/ContactsData`, request);
  }

  public updateContactAsync(
    request: ContactsDataRequest
  ): Observable<ContactsDataResponse> {
    return this.http.put<ContactsDataResponse>(
      `${this.baseUrl}api/ContactsData`,
      request
    );
  }

  public deleteContactAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/ContactsData/${id}`);
  }
}
