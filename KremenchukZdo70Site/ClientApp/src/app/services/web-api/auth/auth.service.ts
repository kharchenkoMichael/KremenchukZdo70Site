import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginRequest } from '@shared/models/login-request';
import { Token } from '@shared/models/token';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const ACCESS_TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router
  ) {}

  login(request: LoginRequest): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}api/Auth/login`, request).pipe(
      tap((token) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
      })
    );
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }
}
