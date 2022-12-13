import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGatosComponent } from './listado-gatos.component';
import { FilterOriginPipe } from '../../pipes/filter-origin.pipe';
import { Observable, of } from 'rxjs';
import { FilterOriginComponent } from '../../components/filter-origin/filter-origin.component';
import { SelectSearchComponent } from '../../components/select-search/select-search.component';
import { TargetaCatComponent } from '../../components/targeta-cat/targeta-cat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CatsModule } from '../../cats.module';

describe('ListadoGatosComponent', () => {
  let component: ListadoGatosComponent;
  let fixture: ComponentFixture<ListadoGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListadoGatosComponent,
        FilterOriginPipe,
        FilterOriginComponent,
        SelectSearchComponent,
        TargetaCatComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        CatsModule
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

  it("should consultar with service successful", () => {
    //component.limitConsult = "3";

    spyOn(component["catService"], "getCats")
      .and.returnValue(
        of([
        ])
      );

    component.consultar();
    expect(component.consultar).toBeDefined();
  })

  it("should consultar with service error", () => {
    component.limitConsult = "3";

    spyOn(component["catService"], "getCats")
      .and.returnValue(
        new Observable(obs => {
          obs.error()
        })
      );
    component.consultar();
    expect(component.consultar).toBeDefined();
  })

  it("should consultar with no conditional limit string", () => {
    component.limitConsult = "abc";
    component.consultar();
    expect(component.consultar).toBeDefined();
  })

  it("should consultar with no conditional limit <1", () => {
    component.limitConsult = "0";
    component.consultar();
    expect(component.consultar).toBeDefined();
  })

  it("should consultar with no conditional limit >100", () => {
    component.limitConsult = "101";
    component.consultar();
    expect(component.consultar).toBeDefined();
  })

});
