import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGatosComponent } from './listado-gatos.component';

describe('ListadoGatosComponent', () => {
  let component: ListadoGatosComponent;
  let fixture: ComponentFixture<ListadoGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGatosComponent ]
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
