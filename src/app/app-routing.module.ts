import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments-list', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent},
  { path: 'departments-list', component: DepartmentListComponent},
  { path: 'departments-list/:id', component: DepartmentDetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  StudentListComponent, 
  DepartmentListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent
];
