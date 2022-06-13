import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveItemComponent } from './collective-item.component';

describe('CollectiveComponent', () => {
  let component: CollectiveItemComponent;
  let fixture: ComponentFixture<CollectiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectiveItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
