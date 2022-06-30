import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitleAdminComponent } from './job-title-admin.component';

describe('JobTitleAdminComponent', () => {
  let component: JobTitleAdminComponent;
  let fixture: ComponentFixture<JobTitleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobTitleAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTitleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
