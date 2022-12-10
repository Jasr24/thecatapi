import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOriginComponent } from './filter-origin.component';

describe('FilterOriginComponent', () => {
  let component: FilterOriginComponent;
  let fixture: ComponentFixture<FilterOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
