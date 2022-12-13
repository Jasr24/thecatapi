import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCategoriaComponent } from './por-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PorCategoriaComponent', () => {
  let component: PorCategoriaComponent;
  let fixture: ComponentFixture<PorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PorCategoriaComponent 
      ],
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should function listarImagenes', () => {
 
    component.listarImagenes(1,"nombre");

    expect( component.listarImagenes).toBeDefined();
  });
});
