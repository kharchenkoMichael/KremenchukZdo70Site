import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@base/services/web-api/auth/auth.service';
import { LayoutState } from '../../../shared/models/layout-state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public get layoutState(): typeof LayoutState {
    return LayoutState;
  }
  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  constructor(private router: Router, private authService: AuthService) {
    this.state = LayoutState.None;

    if (this.router.url.startsWith('/home')) this.state = LayoutState.Home;

    if (this.router.url.startsWith('/about')) this.state = LayoutState.About;

    if (this.router.url.startsWith('/contacts'))
      this.state = LayoutState.Contacts;
  }

  public state: LayoutState;

  ngOnInit(): void {
    this.state = LayoutState.None;

    if (this.router.url.startsWith('/home')) this.state = LayoutState.Home;

    if (this.router.url.startsWith('/about')) this.state = LayoutState.About;

    if (this.router.url.startsWith('/contacts'))
      this.state = LayoutState.Contacts;
  }

  ChangeState(state: LayoutState): void {
    this.state = state;
  }
}
