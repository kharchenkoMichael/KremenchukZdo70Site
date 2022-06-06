import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/components/about/about.component';
import { AntiBullyingComponent } from './components/anti-bullying/anti-bullying.component';
import { CollectiveComponent } from '../../shared/components/collective/collective.component';
import { FoodComponent } from './components/food/food.component';
import { InformationOpennessComponent } from './components/information-openness/information-openness.component';
import { RegulatoryFrameworkComponent } from './components/regulatory-framework/regulatory-framework.component';
import { SpecialEducationalNeedsComponent } from './components/special-educational-needs/special-educational-needs.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        redirectTo: '/about/collective',
        pathMatch: 'full',
      },
      {
        path: 'collective',
        component: CollectiveComponent,
      },
      {
        path: 'information-openness',
        component: InformationOpennessComponent,
      },
      {
        path: 'regulatory-framework',
        component: RegulatoryFrameworkComponent,
      },
      {
        path: 'food',
        component: FoodComponent,
      },
      {
        path: 'anti-bullying',
        component: AntiBullyingComponent,
      },
      {
        path: 'special-educational-needs',
        component: SpecialEducationalNeedsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
