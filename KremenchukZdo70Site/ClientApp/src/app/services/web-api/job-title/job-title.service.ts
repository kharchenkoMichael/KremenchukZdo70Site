import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { JobTitleItemResponse } from '@shared/models/job-title-item-response';
import { JobTitleRequest } from '@shared/models/job-title-item-request';

@Injectable({
  providedIn: 'root',
})
export class JobTitleService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getJobTitleAsync(): Observable<JobTitleItemResponse[]> {
    return this.http.get<JobTitleItemResponse[]>(`${this.baseUrl}api/JobTitle`);
  }

  public createJobTitleAsync(request: JobTitleRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/JobTitle`, request);
  }

  public updateJobTitleAsync(
    request: JobTitleRequest
  ): Observable<JobTitleItemResponse> {
    return this.http.put<JobTitleItemResponse>(
      `${this.baseUrl}api/JobTitle`,
      request
    );
  }

  public deleteJobTitleAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/JobTitle/${id}`);
  }
}
