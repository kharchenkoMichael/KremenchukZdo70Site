import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@base/services/web-api/auth/auth.service';
import { LoginRequest } from '@shared/models/login-request';
import { AboutState } from 'src/app/shared/models/about-state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  public name: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    let request = new LoginRequest();
    request.name = this.name;
    request.password = this.password;

    this.authService.login(request).subscribe(
      (res) => {
        this.router.navigate(['admin']);
      },
      (error) => {
        alert('Wrong login or password');
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  onNameFocusOutEvent(event: any) {
    this.name = event.target.value;
  }

  onPasswordFocusOutEvent(event: any) {
    this.password = event.target.value;
  }
}
