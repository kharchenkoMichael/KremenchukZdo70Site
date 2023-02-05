import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemAdminComponent } from './menu-item-admin.component';

describe('MenuItemAdminComponent', () => {
  let component: MenuItemAdminComponent;
  let fixture: ComponentFixture<MenuItemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
