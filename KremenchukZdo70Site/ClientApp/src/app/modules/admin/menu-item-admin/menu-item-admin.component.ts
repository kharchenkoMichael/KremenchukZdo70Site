import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ElementPageService } from '@base/services/web-api/element-page/element-page.service';
import { MenuService } from '@base/services/web-api/menu/menu.service';
import { ElementPageRequest } from '@shared/models/element-page-request';
import { ElementPageResponse } from '@shared/models/element-page-response';

@Component({
  selector: 'app-menu-item-admin',
  templateUrl: './menu-item-admin.component.html',
  styleUrls: ['./menu-item-admin.component.scss'],
})
export class MenuItemAdminComponent implements OnInit {
  public elementPageResponses: ElementPageResponse[] = [];
  public params?: Params;
  public name?: string;
  public menuId?: number;

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
        .subscribe((result) => {
          this.name = result.name;
          this.menuId = result.id;
        });

      this.elementPageService
        .getElementPageAsync(this.params['id'])
        .subscribe((result) => {
          this.elementPageResponses = result;
          console.log(this.elementPageResponses);
        });
    });
  }

  public remove(informationOpen: ElementPageResponse) {
    this.elementPageResponses.forEach((element, index) => {
      if (element == informationOpen)
        this.elementPageResponses.splice(index, 1);
    });

    this.elementPageService
      .deleteElementPageAsync(informationOpen.id)
      .subscribe();
  }

  public add() {
    var elementPageResponse = new ElementPageResponse();
    elementPageResponse.text = 'Назва за замовчуванням';
    elementPageResponse.href = 'Ссилка за замовчуванням';
    elementPageResponse.imgUrl = 'Посилання на картинку за замовченням';
    elementPageResponse.menuId = this.menuId;
    this.elementPageResponses.push(elementPageResponse);

    var request = new ElementPageRequest();
    request.text = elementPageResponse.text;
    request.href = elementPageResponse.href;
    request.imgUrl = elementPageResponse.imgUrl;
    request.menuId = elementPageResponse.menuId;

    this.elementPageService
      .createElementPageAsync(request)
      .subscribe((result) => (elementPageResponse.id = result));
  }

  onNameChangeEvent(event: any, elementPageResponse: ElementPageResponse) {
    elementPageResponse.text = event.target.value;

    var request = new ElementPageResponse();
    request.id = elementPageResponse.id;
    request.text = elementPageResponse.text;
    request.href = elementPageResponse.href;
    request.imgUrl = elementPageResponse.imgUrl;
    request.menuId = elementPageResponse.menuId;

    this.elementPageService
      .updateElementPageAsync(request)
      .subscribe((result) => (elementPageResponse = result));
  }

  onHrefChangeEvent(event: any, elementPageResponse: ElementPageResponse) {
    elementPageResponse.href = event.target.value;

    var request = new ElementPageResponse();
    request.id = elementPageResponse.id;
    request.text = elementPageResponse.text;
    request.href = elementPageResponse.href;
    request.imgUrl = elementPageResponse.imgUrl;
    request.menuId = elementPageResponse.menuId;

    this.elementPageService
      .updateElementPageAsync(request)
      .subscribe((result) => (elementPageResponse = result));
  }

  onImgChangeEvent(event: any, elementPageResponse: ElementPageResponse) {
    elementPageResponse.imgUrl = event.target.value;

    var request = new ElementPageResponse();
    request.id = elementPageResponse.id;
    request.text = elementPageResponse.text;
    request.href = elementPageResponse.href;
    request.imgUrl = elementPageResponse.imgUrl;
    request.menuId = elementPageResponse.menuId;

    this.elementPageService
      .updateElementPageAsync(request)
      .subscribe((result) => (elementPageResponse = result));
  }
}
