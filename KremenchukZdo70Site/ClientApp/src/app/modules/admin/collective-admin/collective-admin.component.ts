import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';
import { CollectiveRequest } from '@shared/models/collective-request';

@Component({
  selector: 'app-collective-admin',
  templateUrl: './collective-admin.component.html',
  styleUrls: ['./collective-admin.component.scss'],
})
export class CollectiveAdminComponent implements OnInit {
  public collective: CollectiveItemResponse[] = [];

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    var request = new CollectiveRequest();
    request.calcCountTotal = false;
    request.page = 0;
    request.size = 0;
    this.employeeService
      .getCollectiveAsync(request)
      .subscribe((result) => (this.collective = result.data));
  }
}
