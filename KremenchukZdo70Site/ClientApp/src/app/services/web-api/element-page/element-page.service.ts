import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ElementPageResponse } from '@shared/models/element-page-response';
import { ElementPageRequest } from '@shared/models/element-page-request';

@Injectable({
  providedIn: 'root',
})
export class ElementPageService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getElementPageAsync(
    menuId: number
  ): Observable<ElementPageResponse[]> {
    return this.http.get<ElementPageResponse[]>(
      `${this.baseUrl}api/ElementPage/${menuId}`
    );
  }

  public createElementPageAsync(
    request: ElementPageRequest
  ): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/ElementPage`, request);
  }

  public updateElementPageAsync(
    request: ElementPageRequest
  ): Observable<ElementPageResponse> {
    return this.http.put<ElementPageResponse>(
      `${this.baseUrl}api/ElementPage`,
      request
    );
  }

  public deleteElementPageAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/ElementPage/${id}`);
  }
}
