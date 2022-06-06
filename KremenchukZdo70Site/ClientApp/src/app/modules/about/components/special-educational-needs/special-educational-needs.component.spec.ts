import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEducationalNeedsComponent } from './special-educational-needs.component';

describe('SpecialEducationalNeedsComponent', () => {
  let component: SpecialEducationalNeedsComponent;
  let fixture: ComponentFixture<SpecialEducationalNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialEducationalNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEducationalNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
