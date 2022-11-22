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
      //delay(1000),
      tap(coursesList => console.log(coursesList))
    );
  }

  loadById(id: string){
    return this._http.get<CoursesModel>(`${this.API}/${id}`);
  }

  save(course: CoursesModel){
    if(course.id){ //Se course tive id vai pra update
       return this.update(course);
    }
      return this.create(course);
  }

  private create(course: CoursesModel) {
    return this._http.post<CoursesModel[]>(this.API, course).pipe(first());
  }

  private update(course: CoursesModel){
    return this._http.put<CoursesModel[]>(`${this.API}/${course.id}`, course).pipe(first());
  }

  delete(id: string) {
    const url = `${this.API}/${id}`
    return this._http.delete<CoursesModel[]>(url)
  }
}

