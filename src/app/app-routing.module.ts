import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent},
  { path: 'departments', component: DepartmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentListComponent, DepartmentListComponent];
