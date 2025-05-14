import { Routes } from '@angular/router';
import { PresidentComponent } from './president/president.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo:
    '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./main/main.component')
      .then(m => m.MainComponent)
  },
  {
    path: 'president',
    component: PresidentComponent,
    data: { title: 'President' }
  }
];
