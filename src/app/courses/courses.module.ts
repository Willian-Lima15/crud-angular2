import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ErrorDialogComponent } from './../shared/modal/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses.routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../shared/modal/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  declarations: [
    CoursesComponent,
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    CategoryPipe,
    CoursesListComponent,
    CourseFormComponent
  ]
})
export class CoursesModule { }
