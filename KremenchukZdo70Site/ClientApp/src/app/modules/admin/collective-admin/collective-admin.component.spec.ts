import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveAdminComponent } from './collective-admin.component';

describe('CollectiveAdminComponent', () => {
  let component: CollectiveAdminComponent;
  let fixture: ComponentFixture<CollectiveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
