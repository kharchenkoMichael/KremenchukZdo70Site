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
    for (let i = 0; i < this.regulatoryFrameworks.length; i++) {
      console.log(this.regulatoryFrameworks[i]);
    }

    var informationOpen = new RegulatoryFrameworkResponse();
    informationOpen.name = 'Назва за замовчуванням';
    informationOpen.href = 'Ссилка за замовчуванням';
    this.regulatoryFrameworks.push(informationOpen);

    var request = new RegulatoryFrameworkRequest();
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.regulatoryFrameworkService
      .createInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }

  onNameFocusOutEvent(
    event: any,
    informationOpen: RegulatoryFrameworkResponse
  ) {
    informationOpen.name = event.target.value;

    var request = new RegulatoryFrameworkRequest();
    request.id = informationOpen.id;
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.regulatoryFrameworkService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }

  onHrefFocusOutEvent(
    event: any,
    informationOpen: RegulatoryFrameworkResponse
  ) {
    informationOpen.href = event.target.value;

    var request = new RegulatoryFrameworkRequest();
    request.id = informationOpen.id;
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.regulatoryFrameworkService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }
}
