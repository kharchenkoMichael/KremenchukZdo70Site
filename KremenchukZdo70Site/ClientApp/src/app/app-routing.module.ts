import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { AuthComponent } from './modules/auth/auth.component';

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
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
