import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'Home', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent) },
          { path: '**', redirectTo: 'Home' }
        ]
      }
];
