import { Routes } from '@angular/router';
import { AwayComponent } from './away/away.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo:
    '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'away',
    component: AwayComponent,
    data: { title: 'Away' }
  }
];
