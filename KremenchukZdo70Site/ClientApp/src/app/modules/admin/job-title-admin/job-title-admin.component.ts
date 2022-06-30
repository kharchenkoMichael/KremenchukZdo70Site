import { Component, OnInit } from '@angular/core';
import { JobTitleService } from '@base/services/web-api/job-title/job-title.service';
import { JobTitleRequest } from '@shared/models/job-title-item-request';
import { JobTitleItemResponse } from '@shared/models/job-title-item-response';

@Component({
  selector: 'app-job-title-admin',
  templateUrl: './job-title-admin.component.html',
  styleUrls: ['./job-title-admin.component.scss'],
})
export class JobTitleAdminComponent implements OnInit {
  public jobTitles: JobTitleItemResponse[] = [];

  constructor(private readonly jobTitleService: JobTitleService) {}

  ngOnInit(): void {
    this.jobTitleService
      .getJobTitleAsync()
      .subscribe((result) => (this.jobTitles = result));
  }

  public remove(jobTitle: JobTitleItemResponse) {
    this.jobTitles.forEach((element, index) => {
      if (element == jobTitle) this.jobTitles.splice(index, 1);
    });

    this.jobTitleService.deleteJobTitleAsync(jobTitle.id).subscribe();
  }

  public add() {
    var jobTitle = new JobTitleItemResponse();
    jobTitle.name = 'Посада за замовчуванням';
    this.jobTitles.push(jobTitle);

    var request = new JobTitleRequest();
    request.name = jobTitle.name;

    this.jobTitleService
      .createJobTitleAsync(request)
      .subscribe((result) => (jobTitle.id = result));
  }

  onNameChangeEvent(event: any, jobTitle: JobTitleItemResponse) {
    jobTitle.name = event.target.value;

    var request = new JobTitleRequest();
    request.id = jobTitle.id;
    request.name = jobTitle.name;

    this.jobTitleService
      .updateJobTitleAsync(request)
      .subscribe((result) => (jobTitle = result));
  }
}
