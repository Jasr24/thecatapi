import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGatoComponent } from './ver-gato.component';

describe('VerGatoComponent', () => {
  let component: VerGatoComponent;
  let fixture: ComponentFixture<VerGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGatoComponent ]
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
