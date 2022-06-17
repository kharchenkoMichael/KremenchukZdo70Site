import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOpennessAdminComponent } from './information-openness-admin.component';

describe('InformationOpennessAdminComponent', () => {
  let component: InformationOpennessAdminComponent;
  let fixture: ComponentFixture<InformationOpennessAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationOpennessAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOpennessAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
