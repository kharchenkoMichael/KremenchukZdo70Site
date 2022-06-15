import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '@shared/components/contacts/contacts.component';
import { AdminComponent } from './layout/components/admin/admin.component';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { CollectiveComponent } from './modules/about/components/collective/collective.component';
import { InformationOpennessComponent } from './modules/about/components/information-openness/information-openness.component';
import { RegulatoryFrameworkComponent } from './modules/about/components/regulatory-framework/regulatory-framework.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.modules').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.modules').then((m) => m.AboutModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./modules/contacts/contacts.modules').then(
            (m) => m.ContactsModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/collective',
        pathMatch: 'full',
      },
      {
        path: 'collective',
        component: CollectiveComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'information-openness',
        component: InformationOpennessComponent,
      },
      {
        path: 'regulatory-framework',
        component: RegulatoryFrameworkComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
