import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '',              renderMode: RenderMode.Prerender },  
  { path: 'Home',          renderMode: RenderMode.Prerender },  
  { path: 'Cart',          renderMode: RenderMode.Prerender },  
  {
    path: 'product/:id',
    renderMode: RenderMode.Server,  
  },
  { path: '**',            renderMode: RenderMode.Server },     
];
