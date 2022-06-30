import { Component, OnInit, Output } from '@angular/core';
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
  public allPages: number[] = [];
  private size: number = 4;

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.GoPage(0);
  }

  public GoPage(page: number) {
    this.currentPage = page;
    var request = new CollectiveRequest();
    request.calcCountTotal = true;
    request.page = page;
    request.size = this.size;
    this.employeeService.getCollectiveAsync(request).subscribe((result) => {
      this.collective = result.data;
      this.allPages = Array(Math.ceil(result.totalCount / this.size));
    });
  }

  public Previous() {
    if (this.currentPage <= 0) return;

    this.GoPage(this.currentPage - 1);
  }

  public Next() {
    if (this.currentPage >= this.allPages.length - 1) return;

    this.GoPage(this.currentPage + 1);
  }
}
