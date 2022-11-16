import { ErrorDialogComponent } from './../../shared/modal/error-dialog/error-dialog.component';
import { Observable, of } from 'rxjs';
import { CoursesService } from './../../core/services/courses.service';
import { CoursesModel } from './../../shared/model/courses.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];
  courses$: Observable<CoursesModel[]>

  constructor(
    private _coursesServices: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this._coursesServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit() {

  }

}
