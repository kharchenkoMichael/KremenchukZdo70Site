import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectiveItemResponse } from '@shared/models/collective-item-response';

@Component({
  selector: 'app-collective-item',
  templateUrl: './collective-item.component.html',
  styleUrls: ['./collective-item.component.scss'],
})
export class CollectiveItemComponent implements OnInit {
  @Input()
  employee!: CollectiveItemResponse;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onEmployeeClick(id: number) {
    this.router.navigate(['about', 'employee', id]);
  }
}
