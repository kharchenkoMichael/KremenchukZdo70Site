import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { InformationOpenResponse } from '@shared/models/information-open-response copy';

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
}
