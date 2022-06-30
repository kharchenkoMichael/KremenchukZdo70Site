import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';
import { CollectiveRequest } from '@shared/models/collective-request';
import { EmployeeRequest } from '@shared/models/employee-request';

@Component({
  selector: 'app-collective-admin',
  templateUrl: './collective-admin.component.html',
  styleUrls: ['./collective-admin.component.scss'],
})
export class CollectiveAdminComponent implements OnInit {
  public collective: CollectiveItemResponse[] = [];

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.reload();
  }

  public reload(): void {
    var request = new CollectiveRequest();
    request.calcCountTotal = false;
    request.page = 0;
    request.size = 0;
    this.employeeService
      .getCollectiveAsync(request)
      .subscribe((result) => (this.collective = result.data));
  }

  public add() {
    var request = new EmployeeRequest();
    request.firstName = "Ім'я";
    request.secondName = 'По батькові';
    request.lastName = 'Прізвище';
    request.fullProfileUrl =
      'https://lh3.googleusercontent.com/Lyx0pDA8ualwjpWS_fErUaeA3_0DjbE9rv90m44EuUQwzDHghdhhWYabOHnfjHrwTbus00st5qJl_exm2jcV28iqflP0M3u7802lRdFJuiuMXjXhef9ztPPuF4tLnrxzTRI4pGDvHmvN7zv8plL6Q2wtUZHJwkFYw9e00GlUBAcT7J9NjWcGjPFWAM6xLwrcSkoajZuvIplCB4_2D88uY5iKAjgys1HzLQNWrJffr-rP2y89A9bzOIh38XfcqWoXmmLr4Jwt3dUxMvM0PwVtI6o2fEqOYUwmUYJo0-vW0o5liRNer820cUycPnYCAkyPHgoFnoLv1oI7tzg1tRAWIsNKusv_1WDiwmksJhmd0IDGkPNRaLBVQifqIJlh1sDDxQpgwNtBAtf9FlZSznPFODCD7cocYsoBmiJAOHYwaEwpja6DcKkbSecKGx0LIfjPGPf7hYXtyraqz69db-GlcaRnBrxJJbqzWBkH7xGv0-8JspeqT5jQJG0kj8irakBQDSZyocXcxsletykc7aucwoFLsLfARO9HVypmyJNDHSxwrtz2yxS-2w_vMzomsH47FXIIURW7vL3Wyba4b0uisOarpvKQdApVl2qQZ5nZgvh1f0NlEx7R_V78STsC4NFiQwovube81kiq3RlQuFoV9x1PILwVAVzMP_CobpsgnN19xshe23dd0F7YrzD4acSd8YeCjqbB6kVHwYHWAetG5s-IY8Rpl9P6udtBJE0X9FJBK3NPwg7tAAFwm0s=w437-h462-no?authuser=0';
    request.smallProfileUrl =
      'https://lh3.googleusercontent.com/Lyx0pDA8ualwjpWS_fErUaeA3_0DjbE9rv90m44EuUQwzDHghdhhWYabOHnfjHrwTbus00st5qJl_exm2jcV28iqflP0M3u7802lRdFJuiuMXjXhef9ztPPuF4tLnrxzTRI4pGDvHmvN7zv8plL6Q2wtUZHJwkFYw9e00GlUBAcT7J9NjWcGjPFWAM6xLwrcSkoajZuvIplCB4_2D88uY5iKAjgys1HzLQNWrJffr-rP2y89A9bzOIh38XfcqWoXmmLr4Jwt3dUxMvM0PwVtI6o2fEqOYUwmUYJo0-vW0o5liRNer820cUycPnYCAkyPHgoFnoLv1oI7tzg1tRAWIsNKusv_1WDiwmksJhmd0IDGkPNRaLBVQifqIJlh1sDDxQpgwNtBAtf9FlZSznPFODCD7cocYsoBmiJAOHYwaEwpja6DcKkbSecKGx0LIfjPGPf7hYXtyraqz69db-GlcaRnBrxJJbqzWBkH7xGv0-8JspeqT5jQJG0kj8irakBQDSZyocXcxsletykc7aucwoFLsLfARO9HVypmyJNDHSxwrtz2yxS-2w_vMzomsH47FXIIURW7vL3Wyba4b0uisOarpvKQdApVl2qQZ5nZgvh1f0NlEx7R_V78STsC4NFiQwovube81kiq3RlQuFoV9x1PILwVAVzMP_CobpsgnN19xshe23dd0F7YrzD4acSd8YeCjqbB6kVHwYHWAetG5s-IY8Rpl9P6udtBJE0X9FJBK3NPwg7tAAFwm0s=w437-h462-no?authuser=0';

    this.employeeService
      .createEmployeeAsync(request)
      .subscribe((result) =>
        this.router.navigate(['admin', 'employee', result])
      );
  }
}
