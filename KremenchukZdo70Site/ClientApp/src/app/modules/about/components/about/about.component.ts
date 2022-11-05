import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '@base/services/web-api/menu/menu.service';
import { MenuResponse } from '@shared/models/menu-response';
import { AboutState } from 'src/app/shared/models/about-state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public menu: MenuResponse[] = [];
  public get aboutState(): typeof AboutState {
    return AboutState;
  }
  constructor(private router: Router, private menuService: MenuService) {
    this.state = AboutState.None;
    this.reload();
    this.router.events.subscribe(() => this.reload());
  }

  public isOpenedMenu: boolean = true;
  public state: AboutState;

  ngOnInit(): void {
    this.reload();

    this.menuService
      .getParentMenuAsync()
      .subscribe((result) => (this.menu = result));
  }

  private reload() {
    this.state = AboutState.None;

    if (
      this.router.url.startsWith('/about/collective') ||
      this.router.url.startsWith('/about/employee')
    )
      this.state = AboutState.Collective;

    if (this.router.url.startsWith('/about/information-openness'))
      this.state = AboutState.InformationOpenness;

    if (this.router.url.startsWith('/about/regulatory-framework'))
      this.state = AboutState.RegulatoryFramework;

    if (this.router.url.startsWith('/about/food')) this.state = AboutState.Food;

    if (this.router.url.startsWith('/about/anti-bullying'))
      this.state = AboutState.AntiBullying;

    if (this.router.url.startsWith('/about/special-educational-needs'))
      this.state = AboutState.SpecialEducationalNeeds;
  }

  ChangeState(state: AboutState): void {
    this.state = state;
  }
}
