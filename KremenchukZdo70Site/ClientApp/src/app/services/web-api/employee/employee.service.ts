import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CollectiveRequest } from 'src/app/shared/models/collective-request';
import { DataList } from 'src/app/shared/models/data-list';
import { CollectiveItemResponse } from 'src/app/shared/models/collective-item-response';
import { EmployeeRequest } from '@shared/models/employee-request';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getCollectiveAsync(
    request: CollectiveRequest
  ): Observable<DataList<CollectiveItemResponse>> {
    return this.http.post<DataList<CollectiveItemResponse>>(
      `${this.baseUrl}api/Employee/collective`,
      request
    );
  }

  public getEmployeeAsync(id: number): Observable<CollectiveItemResponse> {
    return this.http.get<CollectiveItemResponse>(
      `${this.baseUrl}api/Employee/${id}`
    );
  }

  public createEmployeeAsync(request: EmployeeRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/Employee`, request);
  }

  public updateEmployeeAsync(
    request: EmployeeRequest
  ): Observable<CollectiveItemResponse> {
    return this.http.put<CollectiveItemResponse>(
      `${this.baseUrl}api/Employee`,
      request
    );
  }

  public deleteEmployeeAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/Employee/${id}`);
  }
}
