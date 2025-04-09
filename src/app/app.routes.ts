import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component'; 

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'Home', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent) },
      { path: 'Cart', component: CartComponent }, 
      { path: 'product/:id', component: ProductDetailsComponent ,  },
      { path: '**', redirectTo: 'Home' }
    ]
  }
];
