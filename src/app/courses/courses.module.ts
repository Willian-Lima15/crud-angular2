import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses.routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule
  ],
  declarations: [CoursesComponent]
})
export class CoursesModule { }
