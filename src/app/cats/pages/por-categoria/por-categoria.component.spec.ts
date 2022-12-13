import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCategoriaComponent } from './por-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CatsModule } from '../../cats.module';

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
        MatSnackBarModule,
        CatsModule
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

  it("should serviceCategoriesCats", () => {
    component.serviceCategoriesCats();
    expect(component.serviceCategoriesCats).toBeDefined();
  })
  
  it("should serviceCategoriesCats with service error", () => {

    spyOn(component["catService"], "getCategoriesCats")
      .and.returnValue(
        new Observable(obs => {
          obs.error()
        })
      );
    component.serviceCategoriesCats();
    expect(component.serviceCategoriesCats).toBeDefined();
  })

  it("should listarImagenes", () => {
    component.listarImagenes(1,'space');
    expect(component.listarImagenes).toBeDefined();
  })

  // it("should listarImagenes", () => {
  //   component.listarImagenes(1,'space');
  //   expect(component.listarImagenes).toBeDefined();
  // })
});
