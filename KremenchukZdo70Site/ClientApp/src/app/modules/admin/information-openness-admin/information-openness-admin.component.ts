import { Component, OnInit } from '@angular/core';
import { InformationOpenService } from '@base/services/web-api/information-open/information-open.service';
import { InformationOpenResponse } from '@shared/models/information-open-response copy';

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
}
