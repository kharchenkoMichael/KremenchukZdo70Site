import { Component, OnInit } from '@angular/core';
import { InformationOpenService } from '@base/services/web-api/information-open/information-open.service';
import { InformationOpenRequest } from '@shared/models/information-open-request';
import { InformationOpenResponse } from '@shared/models/information-open-response';

@Component({
  selector: 'app-information-openness-admin',
  templateUrl: './information-openness-admin.component.html',
  styleUrls: ['./information-openness-admin.component.scss'],
})
export class InformationOpennessAdminComponent implements OnInit {
  public informationOpens: InformationOpenResponse[] = [];

  constructor(
    private readonly informationOpenService: InformationOpenService
  ) {}

  ngOnInit(): void {
    this.informationOpenService
      .getInformationOpenAsync()
      .subscribe((result) => (this.informationOpens = result));
  }

  public remove(informationOpen: InformationOpenResponse) {
    this.informationOpens.forEach((element, index) => {
      if (element == informationOpen) this.informationOpens.splice(index, 1);
    });

    this.informationOpenService
      .deleteInformationOpenAsync(informationOpen.id)
      .subscribe();
  }

  public add() {
    for (let i = 0; i < this.informationOpens.length; i++) {
      console.log(this.informationOpens[i]);
    }

    var informationOpen = new InformationOpenResponse();
    informationOpen.name = 'Назва за замовчуванням';
    informationOpen.href = 'Ссилка за замовчуванням';
    this.informationOpens.push(informationOpen);

    var request = new InformationOpenRequest();
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.informationOpenService
      .createInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }

  onNameFocusOutEvent(event: any, informationOpen: InformationOpenResponse) {
    informationOpen.name = event.target.value;

    var request = new InformationOpenRequest();
    request.id = informationOpen.id;
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.informationOpenService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }

  onHrefFocusOutEvent(event: any, informationOpen: InformationOpenResponse) {
    informationOpen.href = event.target.value;

    var request = new InformationOpenRequest();
    request.id = informationOpen.id;
    request.name = informationOpen.name;
    request.href = informationOpen.href;

    this.informationOpenService
      .updateInformationOpenAsync(request)
      .subscribe((result) => (informationOpen = result));
  }
}
