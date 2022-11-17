import { CoursesService } from './../../core/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.coursesForm = this._fb.group({
      name: [''],
      category: ['']
    })
  }

  onSalvar(){
    this.coursesService.save(this.coursesForm.value).subscribe(()  => {
      this.onError();
    })
  }

  onCancel(){}

  private onError(){
    this._snackBar.open('erro','',{duration:5000});
  }

}
