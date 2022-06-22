import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RegulatoryFrameworkResponse } from '@shared/models/regulatory-framework-response';
import { RegulatoryFrameworkRequest } from '@shared/models/regulatory-framework-request';

@Injectable({
  providedIn: 'root',
})
export class RegulatoryFrameworkService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getRegulatoryFrameworkAsync(): Observable<
    RegulatoryFrameworkResponse[]
  > {
    return this.http.get<RegulatoryFrameworkResponse[]>(
      `${this.baseUrl}api/RegulatoryFramework`
    );
  }

  public getInformationOpenByIdAsync(
    id: number
  ): Observable<RegulatoryFrameworkResponse> {
    return this.http.get<RegulatoryFrameworkResponse>(
      `${this.baseUrl}api/RegulatoryFramework/${id}`
    );
  }

  public createInformationOpenAsync(
    request: RegulatoryFrameworkRequest
  ): Observable<number> {
    return this.http.post<number>(
      `${this.baseUrl}api/RegulatoryFramework`,
      request
    );
  }

  public updateInformationOpenAsync(
    request: RegulatoryFrameworkRequest
  ): Observable<RegulatoryFrameworkResponse> {
    return this.http.put<RegulatoryFrameworkResponse>(
      `${this.baseUrl}api/RegulatoryFramework`,
      request
    );
  }

  public deleteInformationOpenAsync(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}api/RegulatoryFramework/${id}`
    );
  }
}
