import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesModel } from 'src/app/shared/model/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

constructor(private _http: HttpClient) { }

list(): Observable<CoursesModel>{
  return
}
}
