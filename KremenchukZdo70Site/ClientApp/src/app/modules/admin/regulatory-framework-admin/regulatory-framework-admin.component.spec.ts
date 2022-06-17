import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryFrameworkAdminComponent } from './regulatory-framework-admin.component';

describe('RegulatoryFrameworkAdminComponent', () => {
  let component: RegulatoryFrameworkAdminComponent;
  let fixture: ComponentFixture<RegulatoryFrameworkAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryFrameworkAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryFrameworkAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
