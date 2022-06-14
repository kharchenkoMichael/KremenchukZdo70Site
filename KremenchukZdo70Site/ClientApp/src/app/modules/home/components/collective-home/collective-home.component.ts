import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';
import { CollectiveRequest } from '@shared/models/collective-request';

@Component({
  selector: 'app-collective-home',
  templateUrl: './collective-home.component.html',
  styleUrls: ['./collective-home.component.scss'],
})
export class CollectiveHomeComponent implements OnInit {
  public collective: CollectiveItemResponse[] = [];
  public currentPage: number = 0;
  public allPageCount: number = 0;
  // private readonly subscriptions = new Subscription();
  // private searchSubject: Subject<PaginationData> =
  // new Subject<PaginationData>();

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    var request = new CollectiveRequest();
    request.calcCountTotal = true;
    request.page = 0;
    request.size = 6;
    this.employeeService.getCollectiveAsync(request).subscribe((result) => {
      this.collective = result.data;
      this.allPageCount = Math.ceil(result.totalCount / 6);
    });
  }
}
