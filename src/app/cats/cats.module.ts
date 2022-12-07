import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorOrigenComponent } from './pages/por-origen/por-origen.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorCategoriaComponent } from './pages/por-categoria/por-categoria.component';
import { VerGatoComponent } from './pages/ver-gato/ver-gato.component';
import { ListadoGatosComponent } from './pages/listado-gatos/listado-gatos.component';



@NgModule({
  declarations: [ 
    PorOrigenComponent,     
    PorNombreComponent, 
    PorCategoriaComponent, 
    VerGatoComponent, 
    ListadoGatosComponent
  ],
  exports:[
    PorOrigenComponent,     
    PorNombreComponent, 
    PorCategoriaComponent, 
    VerGatoComponent,
    ListadoGatosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatsModule { }
