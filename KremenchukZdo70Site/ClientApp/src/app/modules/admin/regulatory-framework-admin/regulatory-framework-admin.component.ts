import { Component, OnInit } from '@angular/core';
import { RegulatoryFrameworkService } from '@base/services/web-api/regulatory-framework/regulatory-framework.service';
import { RegulatoryFrameworkRequest } from '@shared/models/regulatory-framework-request';
import { RegulatoryFrameworkResponse } from '@shared/models/regulatory-framework-response';

@Component({
  selector: 'app-regulatory-framework-admin',
  templateUrl: './regulatory-framework-admin.component.html',
  styleUrls: ['./regulatory-framework-admin.component.scss'],
})
export class RegulatoryFrameworkAdminComponent implements OnInit {
  public regulatoryFrameworks: RegulatoryFrameworkResponse[] = [];

  constructor(
    private readonly regulatoryFrameworkService: RegulatoryFrameworkService
  ) {}

  ngOnInit(): void {
    this.regulatoryFrameworkService
      .getRegulatoryFrameworkAsync()
      .subscribe((result) => (this.regulatoryFrameworks = result));
  }

  public remove(informationOpen: RegulatoryFrameworkResponse) {
    this.regulatoryFrameworks.forEach((element, index) => {
      if (element == informationOpen)
        this.regulatoryFrameworks.splice(index, 1);
    });

    this.regulatoryFrameworkService
      .deleteInformationOpenAsync(informationOpen.id)
      .subscribe();
  }

  public add() {
    var regulatoryFramework = new RegulatoryFrameworkResponse();
    regulatoryFramework.name = 'Назва за замовчуванням';
    regulatoryFramework.href = 'Ссилка за замовчуванням';
    this.regulatoryFrameworks.push(regulatoryFramework);

    var request = new RegulatoryFrameworkRequest();
    request.name = regulatoryFramework.name;
    request.href = regulatoryFramework.href;

    this.regulatoryFrameworkService
      .createInformationOpenAsync(request)
      .subscribe((result) => (regulatoryFramework.id = result));
  }

  onNameFocusOutEvent(
    event: any,
    regulatoryFramework: RegulatoryFrameworkResponse
  ) {
    regulatoryFramework.name = event.target.value;

    var request = new RegulatoryFrameworkRequest();
    request.id = regulatoryFramework.id;
    request.name = regulatoryFramework.name;
    request.href = regulatoryFramework.href;

    this.regulatoryFrameworkService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (regulatoryFramework = result));
  }

  onHrefFocusOutEvent(
    event: any,
    regulatoryFramework: RegulatoryFrameworkResponse
  ) {
    regulatoryFramework.href = event.target.value;

    var request = new RegulatoryFrameworkRequest();
    request.id = regulatoryFramework.id;
    request.name = regulatoryFramework.name;
    request.href = regulatoryFramework.href;

    this.regulatoryFrameworkService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (regulatoryFramework = result));
  }
}
