import { CoursesResolver } from './../guards/courses.resolver';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent, resolve: {course: CoursesResolver}},
  { path: 'edit/:id', component: CourseFormComponent, resolve: {course: CoursesResolver} }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule { }
