import { Observable } from 'rxjs';
import { CoursesService } from './../../core/services/courses.service';
import { CoursesModel } from './../../shared/model/courses.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];
  courses$: Observable<CoursesModel[]>

  constructor(
    private _coursesServices: CoursesService
  ) {
    this.courses$ = this._coursesServices.list();
  }

  ngOnInit() {

  }

}
