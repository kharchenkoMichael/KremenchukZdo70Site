import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { InformationOpenResponse } from '@shared/models/information-open-response';
import { InformationOpenRequest } from '@shared/models/information-open-request';

@Injectable({
  providedIn: 'root',
})
export class InformationOpenService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getInformationOpenAsync(): Observable<InformationOpenResponse[]> {
    return this.http.get<InformationOpenResponse[]>(
      `${this.baseUrl}api/InformationOpen`
    );
  }

  public getInformationOpenByIdAsync(
    id: number
  ): Observable<InformationOpenResponse> {
    return this.http.get<InformationOpenResponse>(
      `${this.baseUrl}api/InformationOpen/${id}`
    );
  }

  public createInformationOpenAsync(
    request: InformationOpenRequest
  ): Observable<number> {
    return this.http.post<number>(
      `${this.baseUrl}api/InformationOpen`,
      request
    );
  }

  public updateInformationOpenAsync(
    request: InformationOpenRequest
  ): Observable<InformationOpenResponse> {
    return this.http.put<InformationOpenResponse>(
      `${this.baseUrl}api/InformationOpen`,
      request
    );
  }

  public deleteInformationOpenAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/InformationOpen/${id}`);
  }
}
