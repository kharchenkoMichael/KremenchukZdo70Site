import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@base/services/web-api/auth/auth.service';
import { AdminState } from '@shared/models/admin-state';
import { LayoutState } from '../../../shared/models/layout-state';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  public get adminState(): typeof AdminState {
    return AdminState;
  }
  constructor(private router: Router, private authService: AuthService) {
    this.state = AdminState.None;

    if (this.router.url.startsWith('/admin/collective'))
      this.state = AdminState.Collective;
    if (this.router.url.startsWith('/admin/contacts'))
      this.state = AdminState.Contacts;
    if (this.router.url.startsWith('/admin/information-openness'))
      this.state = AdminState.InformationOpenness;
    if (this.router.url.startsWith('/admin/regulatory-framework'))
      this.state = AdminState.RegulatoryFramework;
  }

  public state: AdminState;

  ngOnInit(): void {
    this.state = AdminState.None;

    if (this.router.url.startsWith('/admin/collective'))
      this.state = AdminState.Collective;
    if (this.router.url.startsWith('/admin/contacts'))
      this.state = AdminState.Contacts;
    if (this.router.url.startsWith('/admin/information-openness'))
      this.state = AdminState.InformationOpenness;
    if (this.router.url.startsWith('/admin/regulatory-framework'))
      this.state = AdminState.RegulatoryFramework;
  }

  ChangeState(state: AdminState): void {
    this.state = state;
  }

  Logout() {
    this.authService.logout();
  }
}