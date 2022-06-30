import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '@base/services/web-api/employee/employee.service';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';

@Component({
  selector: 'app-collective-item',
  templateUrl: './collective-item.component.html',
  styleUrls: ['./collective-item.component.scss'],
})
export class CollectiveItemComponent implements OnInit {
  @Input()
  employee!: CollectiveItemResponse;

  @Input()
  isAdmin: boolean = false;

  @Output() onReload = new EventEmitter();

  constructor(
    private readonly employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onEmployeeClick(id: number) {
    if (this.isAdmin) {
      this.router.navigate(['admin', 'employee', id]);
    } else {
      this.router.navigate(['about', 'employee', id]);
    }
  }

  remove(event: any) {
    event.stopPropagation();
    this.employeeService
      .deleteEmployeeAsync(this.employee.id)
      .subscribe(() => this.onReload.emit());
  }
}
