import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGatosComponent } from './listado-gatos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterOriginPipe } from '../../pipes/filter-origin.pipe';

describe('ListadoGatosComponent', () => {
  let component: ListadoGatosComponent;
  let fixture: ComponentFixture<ListadoGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ListadoGatosComponent,
        FilterOriginPipe
      ],
      imports:[
        HttpClientModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
