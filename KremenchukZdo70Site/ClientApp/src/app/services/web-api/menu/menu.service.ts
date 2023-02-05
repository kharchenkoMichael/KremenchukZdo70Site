import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MenuResponse } from '@shared/models/menu-response';
import { MenuRequest } from '@shared/models/menu-request';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public getAllMenuAsync(): Observable<MenuResponse[]> {
    return this.http.get<MenuResponse[]>(`${this.baseUrl}api/Menu`);
  }

  public getMenuItemAsync(id: number): Observable<MenuResponse> {
    return this.http.get<MenuResponse>(
      `${this.baseUrl}api/Menu/menu-item/${id}`
    );
  }

  public getParentMenuAsync(): Observable<MenuResponse[]> {
    return this.http.get<MenuResponse[]>(`${this.baseUrl}api/Menu/parent`);
  }

  public getSubMenusAsync(menuId: number): Observable<MenuResponse[]> {
    return this.http.get<MenuResponse[]>(`${this.baseUrl}api/Menu/${menuId}`);
  }

  public createMenuAsync(request: MenuRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}api/Menu`, request);
  }

  public updateMenuAsync(request: MenuRequest): Observable<MenuResponse> {
    return this.http.put<MenuResponse>(`${this.baseUrl}api/Menu`, request);
  }

  public deleteMenuAsync(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/Menu/${id}`);
  }
}
