import { CoursesModel } from 'src/app/shared/model/courses.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category','actions'];
  @Input() courses: CoursesModel[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['form'],{relativeTo: this.route});
  }

}
