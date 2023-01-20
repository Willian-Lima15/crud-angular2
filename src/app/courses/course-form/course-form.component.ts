import { CoursesModel } from './../../shared/model/courses.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from './../../core/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common'

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  coursesForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private coursesService:CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.coursesForm = this._fb.group({
      id: [''],
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      category: ['',[Validators.required]]
    })
    const course: CoursesModel = this.route.snapshot.data['course'];
    this.coursesForm.setValue({
      id: course.id,
      name:course.name,
      category: course.category
    })
  }

  onSalvar(){
    this.coursesService.save(this.coursesForm.value)
    .subscribe((res)  => this.onSuccess(), error => this.onError())
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Curso salvo com sucesso!!','',{duration:5000})
    this.onCancel();
  }

  private onError(){
    this._snackBar.open('erro','',{duration:5000});
  }

  getErrorMessage(fildName:string) {
    const field = this.coursesForm.get(fildName);

    if(field?.hasError('required')){
      return 'Campo obrigatório';
    }

    if(field?.hasError('minLength')){
      const requiredLength = field.errors ? field.errors['minLength']['requiredLength'] : 5;
      return `Tamanho minimo precisa ser de ${requiredLength} caracters.`
    }

    if(field?.hasError('maxLength')){
      const requiredLength = field.errors ? field.errors['mxLength']['requiredLength'] : 30;
      return `Tamanho máximo precisa ser de ${requiredLength} caracters.`
    }

    return 'Campo Inválido';
  }

}
