import { CoursesModel } from './../shared/model/courses.model';
import { CoursesService } from './../core/services/courses.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CoursesModel> {

  constructor(
    private coursesService: CoursesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CoursesModel> {
    if(route.params && route.params['id']){
      return this.coursesService.loadById(route.params['id']);
    }
    return of({id:'', name:'',category:''});
  }
}
