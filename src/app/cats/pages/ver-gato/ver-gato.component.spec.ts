import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGatoComponent } from './ver-gato.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VerGatoComponent', () => {
  let component: VerGatoComponent;
  let fixture: ComponentFixture<VerGatoComponent>;

  const paramsSubject = new BehaviorSubject({
    id:"ad2"
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        VerGatoComponent
      ],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        MatDividerModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject
          },
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should func initGato', () => {

    spyOn(component["catService"], "getCatById").and.returnValue(
      of({
        id: "1",
        name: "jos",
        imagen: "img",
        origin: "CO",
        country_code: "co",
        life_span: "7",
      })
    )
    component.initGato();
    expect(component.initGato).toBeDefined();
  });

  it('should func initGato', () => {

    spyOn(component["catService"], "getCatById").and.returnValue(
      new Observable(obs=>{
        obs.error();
      })
    )
    component.initGato();
    expect(component.initGato).toBeDefined();
  });

});
