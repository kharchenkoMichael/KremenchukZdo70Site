import { Component, OnInit } from '@angular/core';
import { MenuService } from '@base/services/web-api/menu/menu.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ElementPageService } from '@base/services/web-api/element-page/element-page.service';
import { ElementPageResponse } from '@shared/models/element-page-response';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  public elementPageResponses: ElementPageResponse[] = [];
  public params?: Params;
  public name?: string;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private elementPageService: ElementPageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.params = params;
      this.menuService
        .getMenuItemAsync(this.params['id'])
        .subscribe((result) => (this.name = result.name));

      this.elementPageService
        .getElementPageAsync(this.params['id'])
        .subscribe((result) => (this.elementPageResponses = result));
    });
  }
}
