import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '@base/services/web-api/content/content.service';
import { EmployeeToJobTitleService } from '@base/services/web-api/employee-to-job-title/employee-to-job-title.service';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { JobTitleService } from '@base/services/web-api/job-title/job-title.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';
import { ContentRequest } from '@shared/models/content-request';
import { ContentResponse } from '@shared/models/content-response';
import { EmployeeRequest } from '@shared/models/employee-request';
import { EmployeeToJobTitleRequest } from '@shared/models/employee-to-job-title-item-request';
import { EmployeeToJobTitleResponse } from '@shared/models/employee-to-job-title-item-response';
import { JobTitleItemResponse } from '@shared/models/job-title-item-response';

@Component({
  selector: 'app-employee-admin',
  templateUrl: './employee-admin.component.html',
  styleUrls: ['./employee-admin.component.scss'],
})
export class EmployeeAdminComponent implements OnInit {
  public employee: CollectiveItemResponse = new CollectiveItemResponse();
  public contents: ContentResponse[] = [];
  public jobTitles: JobTitleItemResponse[] = [];
  public employeeToJobTitles: EmployeeToJobTitleResponse[] = [];

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly contentService: ContentService,
    private readonly jobTitleService: JobTitleService,
    private readonly employeeToJobTitleService: EmployeeToJobTitleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = +params['id'];

      this.employeeService.getEmployeeAsync(id).subscribe((result) => {
        this.employee = result;
      });

      this.contentService.getContentAsync(id).subscribe((result) => {
        this.contents = result;
      });

      this.jobTitleService.getJobTitleAsync().subscribe((result) => {
        this.jobTitles = result;
      });

      this.employeeToJobTitleService
        .getEmployeeToJobTitleByEmployeeIdAsync(id)
        .subscribe((result) => {
          this.employeeToJobTitles = result;
        });
    });
  }

  toCollective() {
    this.router.navigate(['admin', 'collective']);
  }

  public removeContent(content: ContentResponse) {
    this.contents.forEach((element, index) => {
      if (element == content) this.contents.splice(index, 1);
    });

    this.contentService.deleteContentAsync(content.id).subscribe();
  }

  public addContent() {
    var content = new ContentResponse();
    content.value = 'Новий контент';
    content.employeeId = this.employee.id;
    this.contents.push(content);

    var request = new ContentRequest();
    request.value = content.value;
    request.employeeId = content.employeeId;

    this.contentService
      .createContentAsync(request)
      .subscribe((result) => (content.id = result));
  }

  onNameChangeEvent(event: any, content: ContentResponse) {
    content.value = event.target.value;

    var request = new ContentRequest();
    request.id = content.id;
    request.value = content.value;
    request.employeeId = content.employeeId;

    this.contentService
      .updateContentAsync(request)
      .subscribe((result) => (content = result));
  }

  onChangeEvent() {
    let request = new EmployeeRequest();
    request.id = this.employee.id;
    request.firstName = this.employee.firstName;
    request.secondName = this.employee.secondName;
    request.lastName = this.employee.lastName;
    request.fullProfileUrl = this.employee.fullProfileUrl;
    request.smallProfileUrl = this.employee.smallProfileUrl;

    this.employeeService.updateEmployeeAsync(request).subscribe();
  }

  remove() {
    this.employeeService
      .deleteEmployeeAsync(this.employee.id)
      .subscribe(() => this.router.navigate(['admin', 'collective']));
  }

  public add() {
    var request = new EmployeeRequest();
    request.firstName = "Ім'я";
    request.secondName = 'По батькові';
    request.lastName = 'Прізвище';
    request.fullProfileUrl =
      'https://lh3.googleusercontent.com/pw/AM-JKLWutzdGr_7fE74EF1mDd2etQ_cQKtRYM-flMkFG8VC503LMtG8QeaZ3WsZ9Y2ioBII3ANoctrSk3hlimUPgNzf5kXXyl9UcrU6fgQ0Vjlf1NbYJoyUUWmV8PnHV34kursBAuuxe2G4wne0_IVOlXkW-=w437-h462-no?authuser=0';
    request.smallProfileUrl =
      'https://lh3.googleusercontent.com/pw/AM-JKLWutzdGr_7fE74EF1mDd2etQ_cQKtRYM-flMkFG8VC503LMtG8QeaZ3WsZ9Y2ioBII3ANoctrSk3hlimUPgNzf5kXXyl9UcrU6fgQ0Vjlf1NbYJoyUUWmV8PnHV34kursBAuuxe2G4wne0_IVOlXkW-=w437-h462-no?authuser=0';

    this.employeeService
      .createEmployeeAsync(request)
      .subscribe((result) =>
        this.router.navigate(['admin', 'employee', result])
      );
  }

  public goToJobTitles() {
    this.router.navigate(['admin', 'job-title']);
  }

  removeJobTitle(employeeToJobTitle: EmployeeToJobTitleResponse) {
    this.employeeToJobTitles.forEach((element, index) => {
      if (element == employeeToJobTitle)
        this.employeeToJobTitles.splice(index, 1);
    });

    this.employeeToJobTitleService
      .deleteEmployeeToJobTitleAsync(employeeToJobTitle.id)
      .subscribe();
  }

  public addJobTitle() {
    var employeeToJobTitle = new EmployeeToJobTitleResponse();
    employeeToJobTitle.employeeId = this.employee.id;
    employeeToJobTitle.jobTitleId = this.jobTitles[0].id;
    this.employeeToJobTitles.push(employeeToJobTitle);

    var request = new EmployeeToJobTitleRequest();
    request.employeeId = employeeToJobTitle.employeeId;
    request.jobTitleId = employeeToJobTitle.jobTitleId;

    this.employeeToJobTitleService
      .createEmployeeToJobTitleAsync(request)
      .subscribe((result) => (employeeToJobTitle.id = result));
  }

  onJobTitleChangeEvent(
    event: any,
    employeeToJobTitle: EmployeeToJobTitleResponse
  ) {
    console.log(event);
    employeeToJobTitle.jobTitleId = event.target.value;

    var request = new EmployeeToJobTitleRequest();
    request.id = employeeToJobTitle.id;
    request.jobTitleId = employeeToJobTitle.jobTitleId;
    request.employeeId = employeeToJobTitle.employeeId;

    this.employeeToJobTitleService
      .updateEmployeeToJobTitleAsync(request)
      .subscribe((result) => (employeeToJobTitle = result));
  }
}
