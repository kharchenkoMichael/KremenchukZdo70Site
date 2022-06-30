import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { EmployeeToJobTitleResponse } from '@shared/models/employee-to-job-title-item-response';
import { EmployeeToJobTitleRequest } from '@shared/models/employee-to-job-title-item-request';

@Injectable({
  providedIn: 'root',
})
export class EmployeeToJobTitleService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getEmployeeToJobTitleByEmployeeIdAsync(
    employeeId: number
  ): Observable<EmployeeToJobTitleResponse[]> {
    return this.http.get<EmployeeToJobTitleResponse[]>(
      `${this.baseUrl}api/EmployeeToJobTitle/${employeeId}`
    );
  }

  public createEmployeeToJobTitleAsync(
    request: EmployeeToJobTitleRequest
  ): Observable<number> {
    return this.http.post<number>(
      `${this.baseUrl}api/EmployeeToJobTitle`,
      request
    );
  }

  public updateEmployeeToJobTitleAsync(
    request: EmployeeToJobTitleRequest
  ): Observable<EmployeeToJobTitleResponse> {
    return this.http.put<EmployeeToJobTitleResponse>(
      `${this.baseUrl}api/EmployeeToJobTitle`,
      request
    );
  }

  public deleteEmployeeToJobTitleAsync(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}api/EmployeeToJobTitle/${id}`
    );
  }
}
