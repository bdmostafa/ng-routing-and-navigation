import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>
      Department List
    </h2>
    <ul>
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        {{ department.id }} - {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);

    // Relative parameter argument
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
