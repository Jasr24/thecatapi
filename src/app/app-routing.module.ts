import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGatosComponent } from './cats/pages/listado-gatos/listado-gatos.component';
import { PorCategoriaComponent } from './cats/pages/por-categoria/por-categoria.component';
import { VerGatoComponent } from './cats/pages/ver-gato/ver-gato.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoGatosComponent,
    pathMatch: 'full'
  },
  {
    path: 'categoria',
    component: PorCategoriaComponent
  },
  {
    path: 'cat/:id',
    component: VerGatoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
