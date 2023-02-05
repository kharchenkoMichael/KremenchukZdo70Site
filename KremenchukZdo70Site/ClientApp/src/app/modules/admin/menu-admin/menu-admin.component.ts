import { Component, OnInit } from '@angular/core';
import { MenuService } from '@base/services/web-api/menu/menu.service';
import { RegulatoryFrameworkService } from '@base/services/web-api/regulatory-framework/regulatory-framework.service';
import { MenuRequest } from '@shared/models/menu-request';
import { MenuResponse } from '@shared/models/menu-response';
import { RegulatoryFrameworkRequest } from '@shared/models/regulatory-framework-request';
import { RegulatoryFrameworkResponse } from '@shared/models/regulatory-framework-response';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {
  public menuResponses: MenuResponse[] = [];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService
      .getAllMenuAsync()
      .subscribe((result) => (this.menuResponses = result));
  }

  public remove(menuResponse: MenuResponse) {
    this.menuResponses.forEach((element, index) => {
      if (element == menuResponse) this.menuResponses.splice(index, 1);
    });

    this.menuService.deleteMenuAsync(menuResponse.id).subscribe();
  }

  public add() {
    var menuResponse = new MenuResponse();
    menuResponse.name = 'Назва за замовчуванням';
    this.menuResponses.push(menuResponse);

    var request = new MenuRequest();
    request.name = menuResponse.name;

    this.menuService
      .createMenuAsync(request)
      .subscribe((result) => (menuResponse.id = result));
  }

  onNameChangeEvent(event: any, menuResponse: MenuResponse) {
    menuResponse.name = event.target.value;

    var request = new MenuRequest();
    request.id = menuResponse.id;
    request.name = menuResponse.name;

    this.menuService
      .updateMenuAsync(request)
      .subscribe((result) => (menuResponse = result));
  }
}
