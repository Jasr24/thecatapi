import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaCatComponent } from './targeta-cat.component';
import { HttpClientModule } from '@angular/common/http';

describe('TargetaCatComponent', () => {
  let component: TargetaCatComponent;
  let fixture: ComponentFixture<TargetaCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TargetaCatComponent 
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetaCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
