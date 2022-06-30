import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ContentResponse } from '@shared/models/content-response';
import { ContentRequest } from '@shared/models/content-request';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getContentAsync(employeeId: number): Observable<ContentResponse[]> {
    return this.http.get<ContentResponse[]>(
      `${this.baseUrl}api/Content/${employeeId}`
    );
  }

  public createContentAsync(request: ContentRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/Content`, request);
  }

  public updateContentAsync(
    request: ContentRequest
  ): Observable<ContentResponse> {
    return this.http.put<ContentResponse>(
      `${this.baseUrl}api/Content`,
      request
    );
  }

  public deleteContentAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/Content/${id}`);
  }
}
