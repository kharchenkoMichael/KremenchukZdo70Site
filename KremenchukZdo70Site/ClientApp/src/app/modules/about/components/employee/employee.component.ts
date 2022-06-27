import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';
import { CollectiveRequest } from '@shared/models/collective-request';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  public employee: CollectiveItemResponse = new CollectiveItemResponse();
  public content: string[] = [];

  constructor(
    private readonly employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = +params['id'];

      this.employeeService
        .getEmployeeAsync(id)
        .subscribe((result) => (this.employee = result));

      this.employeeService
        .getEmployeeContentAsync(id)
        .subscribe((result) => (this.content = result));
    });
  }

  toCollective(): void {
    this.router.navigate(['about', 'collective']);
  }
}
