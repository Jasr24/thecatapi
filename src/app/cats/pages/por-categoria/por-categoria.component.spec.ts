import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCategoriaComponent } from './por-categoria.component';

describe('PorCategoriaComponent', () => {
  let component: PorCategoriaComponent;
  let fixture: ComponentFixture<PorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCategoriaComponent ]
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
});
