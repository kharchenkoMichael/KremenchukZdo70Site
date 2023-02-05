import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@base/services/web-api/auth/auth.service';
import { MenuService } from '@base/services/web-api/menu/menu.service';
import { AdminState } from '@shared/models/admin-state';
import { MenuRequest } from '@shared/models/menu-request';
import { MenuResponse } from '@shared/models/menu-response';
import { LayoutState } from '../../../shared/models/layout-state';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  public menu: MenuResponse[] = [];
  public get adminState(): typeof AdminState {
    return AdminState;
  }

  public isOpenedMenu: boolean = true;
  public state: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private menuService: MenuService
  ) {
    this.state = AdminState.None;
    router.events.subscribe(() => this.reload());
    this.reload();
  }

  ngOnInit(): void {
    this.reload();
    this.menuService
      .getParentMenuAsync()
      .subscribe((result) => (this.menu = result));
  }

  public reload() {
    this.state = AdminState.None;

    if (
      this.router.url.startsWith('/admin/collective') ||
      this.router.url.startsWith('/admin/employee')
    )
      this.state = AdminState.Collective;
    else if (this.router.url.startsWith('/admin/contacts'))
      this.state = AdminState.Contacts;
    else if (this.router.url.startsWith('/admin/job-title'))
      this.state = AdminState.JobTitle;
    else if (this.router.url.startsWith('/admin/menu'))
      this.state = AdminState.Menu;
    else if (this.router.url.startsWith('/admin/menu'))
      this.state = AdminState.Menu;
    else {
      this.state = Number(this.router.url.substring(7));
    }
  }

  ChangeState(state: number): void {
    this.state = state;
  }

  Logout() {
    this.authService.logout();
  }
}
