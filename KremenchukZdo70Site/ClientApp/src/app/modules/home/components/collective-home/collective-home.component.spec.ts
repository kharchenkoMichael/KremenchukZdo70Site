import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveHomeComponent } from './collective-home.component';

describe('CollectiveComponent', () => {
  let component: CollectiveHomeComponent;
  let fixture: ComponentFixture<CollectiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
