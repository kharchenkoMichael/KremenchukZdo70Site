import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryFrameworkComponent } from './regulatory-framework.component';

describe('RegulatoryFrameworkComponent', () => {
  let component: RegulatoryFrameworkComponent;
  let fixture: ComponentFixture<RegulatoryFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
