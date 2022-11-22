import { CoursesService } from './../../core/services/courses.service';
import { CoursesModel } from 'src/app/shared/model/courses.model';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category','actions'];
  @Input() courses: CoursesModel[] = []
  @Output() add = new EventEmitter(false)
  @Output() edit= new EventEmitter(false)
  @Output() delete= new EventEmitter(false)

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.add.emit(true)
  }

  onEdit(course: CoursesModel){
    this.edit.emit(course)
  }

  onDelete() {
    this.delete.emit(true)
  }

}
