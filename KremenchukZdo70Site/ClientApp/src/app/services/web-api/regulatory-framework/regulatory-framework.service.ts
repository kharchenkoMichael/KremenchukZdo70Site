import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RegulatoryFrameworkResponse } from '@shared/models/regulatory-framework-response';

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
}
