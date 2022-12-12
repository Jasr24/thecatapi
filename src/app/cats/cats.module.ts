import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';

//pipes
import { FilterOriginPipe } from './pipes/filter-origin.pipe';

import { PorCategoriaComponent } from './pages/por-categoria/por-categoria.component';
import { VerGatoComponent } from './pages/ver-gato/ver-gato.component';
import { ListadoGatosComponent } from './pages/listado-gatos/listado-gatos.component';
import { TargetaCatComponent } from './components/targeta-cat/targeta-cat.component';
import { FilterOriginComponent } from './components/filter-origin/filter-origin.component';
import { SelectSearchComponent } from './components/select-search/select-search.component';



@NgModule({
  declarations: [ 
    ListadoGatosComponent, 
    PorCategoriaComponent, 
    TargetaCatComponent, 
    FilterOriginComponent,
    FilterOriginPipe,
    SelectSearchComponent,
    VerGatoComponent,
  ],
  exports:[
    ListadoGatosComponent,
    PorCategoriaComponent, 
    NgxSpinnerModule,
    VerGatoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxMatSelectSearchModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDividerModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ]
})
export class CatsModule { }
