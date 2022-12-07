import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGatosComponent } from './cats/pages/listado-gatos/listado-gatos.component';
import { PorNombreComponent } from './cats/pages/por-nombre/por-nombre.component';
import { PorOrigenComponent } from './cats/pages/por-origen/por-origen.component';
import { PorCategoriaComponent } from './cats/pages/por-categoria/por-categoria.component';
import { VerGatoComponent } from './cats/pages/ver-gato/ver-gato.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoGatosComponent,
    pathMatch: 'full'
  },
  {
    path: 'nombre',
    component: PorNombreComponent
  },
  {
    path: 'origen',
    component: PorOrigenComponent
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
    path: '400',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
