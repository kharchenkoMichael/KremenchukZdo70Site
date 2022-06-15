import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminState } from '@shared/models/admin-state';
import { LayoutState } from '../../../shared/models/layout-state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public get adminState(): typeof AdminState {
    return AdminState;
  }
  constructor(private router: Router) {
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
}
