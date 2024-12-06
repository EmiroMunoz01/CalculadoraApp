import { Routes } from '@angular/router';
import ConcretoListadoComponent from './concreto-listado/concreto-listado.component';

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
  },{
    path: ':idConcreto/editar',
    loadComponent: () =>
      import('./concreto-formulario/concreto-formulario.component'),
  },{
    path: ':idConcreto/editarConcreto',
    loadComponent: () =>
      import('./editar-concreto/editar-concreto.component'),
  },
];
