import { Component, OnInit } from '@angular/core';
import { RegulatoryFrameworkService } from '@base/services/web-api/regulatory-framework/regulatory-framework.service';
import { RegulatoryFrameworkResponse } from '@shared/models/regulatory-framework-response';

@Component({
  selector: 'app-regulatory-framework',
  templateUrl: './regulatory-framework.component.html',
  styleUrls: ['./regulatory-framework.component.scss'],
})
export class RegulatoryFrameworkComponent implements OnInit {
  public regulatoryFrameworks: RegulatoryFrameworkResponse[] = [];

  constructor(
    private readonly regulatoryFrameworkService: RegulatoryFrameworkService
  ) {}

  ngOnInit(): void {
    this.regulatoryFrameworkService
      .getRegulatoryFrameworkAsync()
      .subscribe((result) => (this.regulatoryFrameworks = result));
  }
}
