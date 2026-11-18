import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./features/contacts/pages/contact-list/contact-list').then(m => m.ContactList),
      },
    ],
  },
];
