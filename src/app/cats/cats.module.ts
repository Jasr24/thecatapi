import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //Formularios
import { MatButtonModule } from '@angular/material/button'; //Botones
import { MatInputModule } from '@angular/material/input'; //inputs
import { MatIconModule } from '@angular/material/icon'; //Iconos
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


//pipes
import { FilterOriginPipe } from './pipes/filter-origin.pipe';


import { PorOrigenComponent } from './pages/por-origen/por-origen.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorCategoriaComponent } from './pages/por-categoria/por-categoria.component';
import { VerGatoComponent } from './pages/ver-gato/ver-gato.component';
import { ListadoGatosComponent } from './pages/listado-gatos/listado-gatos.component';
import { TargetaCatComponent } from './components/targeta-cat/targeta-cat.component';
import { FilterOriginComponent } from './components/filter-origin/filter-origin.component';
import { SelectSearchComponent } from './components/select-search/select-search.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    PorOrigenComponent,     
    PorNombreComponent, 
    PorCategoriaComponent, 
    VerGatoComponent, 
    ListadoGatosComponent, 
    TargetaCatComponent, 
    FilterOriginComponent,
    FilterOriginPipe,
    SelectSearchComponent
  ],
  exports:[
    PorOrigenComponent,     
    PorNombreComponent, 
    PorCategoriaComponent, 
    VerGatoComponent,
    ListadoGatosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatSnackBarModule,
    MatProgressBarModule,
    
    NgxMatSelectSearchModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class CatsModule { }
