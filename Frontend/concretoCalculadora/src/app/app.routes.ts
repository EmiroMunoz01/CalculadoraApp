import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./concreto-listado/concreto-listado.component'),
  },
  {
    path: 'nuevo',
    loadComponent: () =>
      import('./concreto-formulario/concreto-formulario.component'),
  },
];
