import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorOrigenComponent } from './por-origen.component';

describe('PorOrigenComponent', () => {
  let component: PorOrigenComponent;
  let fixture: ComponentFixture<PorOrigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorOrigenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
