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

  public isOpenedMenu: boolean = true;
  public state: AdminState;

  constructor(private router: Router, private authService: AuthService) {
    this.state = AdminState.None;
    router.events.subscribe(() => this.reload());
    this.reload();
  }

  ngOnInit(): void {
    this.reload();
  }

  public reload() {
    this.state = AdminState.None;

    if (
      this.router.url.startsWith('/admin/collective') ||
      this.router.url.startsWith('/admin/employee')
    )
      this.state = AdminState.Collective;
    if (this.router.url.startsWith('/admin/contacts'))
      this.state = AdminState.Contacts;
    if (this.router.url.startsWith('/admin/information-openness'))
      this.state = AdminState.InformationOpenness;
    if (this.router.url.startsWith('/admin/regulatory-framework'))
      this.state = AdminState.RegulatoryFramework;
    if (this.router.url.startsWith('/admin/job-title'))
      this.state = AdminState.JobTitle;
  }

  ChangeState(state: AdminState): void {
    this.state = state;
  }

  Logout() {
    this.authService.logout();
  }
}
