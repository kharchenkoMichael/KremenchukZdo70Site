import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOpennessComponent } from './information-openness.component';

describe('InformationOpennessComponent', () => {
  let component: InformationOpennessComponent;
  let fixture: ComponentFixture<InformationOpennessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationOpennessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOpennessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
