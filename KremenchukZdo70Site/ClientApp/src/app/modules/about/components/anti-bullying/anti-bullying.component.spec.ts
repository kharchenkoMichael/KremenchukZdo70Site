import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiBullyingComponent } from './anti-bullying.component';

describe('AntiBullyingComponent', () => {
  let component: AntiBullyingComponent;
  let fixture: ComponentFixture<AntiBullyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiBullyingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiBullyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
