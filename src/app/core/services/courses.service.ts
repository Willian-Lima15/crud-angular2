import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {delay, first, tap} from 'rxjs/operators'
import { CoursesModel } from 'src/app/shared/model/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:3000/courses'

  constructor(private _http: HttpClient) { }

  list() {
    return this._http.get<CoursesModel[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(coursesList => console.log(coursesList))
    )
  }
}

