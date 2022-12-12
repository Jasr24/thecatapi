import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGatoComponent } from './ver-gato.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('VerGatoComponent', () => {
  let component: VerGatoComponent;
  let fixture: ComponentFixture<VerGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        VerGatoComponent 
      ],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule
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
});
