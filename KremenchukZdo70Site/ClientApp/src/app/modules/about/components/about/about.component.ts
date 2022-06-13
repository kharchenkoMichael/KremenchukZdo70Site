import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutState } from 'src/app/shared/models/about-state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public get aboutState(): typeof AboutState {
    return AboutState;
  }
  constructor(private router: Router) {
    this.state = AboutState.None;

    if (this.router.url.startsWith('/about/collective'))
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

  public state: AboutState;

  ngOnInit(): void {
    this.state = AboutState.None;

    if (this.router.url.startsWith('/about/collective'))
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
