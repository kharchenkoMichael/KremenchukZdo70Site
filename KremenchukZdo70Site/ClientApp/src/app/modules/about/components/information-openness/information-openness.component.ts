import { Component, OnInit } from '@angular/core';
import { InformationOpenService } from '@base/services/web-api/information-open/information-open.service';
import { InformationOpenResponse } from '@shared/models/information-open-response';

@Component({
  selector: 'app-information-openness',
  templateUrl: './information-openness.component.html',
  styleUrls: ['./information-openness.component.scss'],
})
export class InformationOpennessComponent implements OnInit {
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
