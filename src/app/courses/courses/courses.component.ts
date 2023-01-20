import { ErrorDialogComponent } from './../../shared/modal/error-dialog/error-dialog.component';
import { Observable, of } from 'rxjs';
import { CoursesService } from './../../core/services/courses.service';
import { CoursesModel } from './../../shared/model/courses.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/modal/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category','actions'];
  courses$: Observable<CoursesModel[]> | null = null;

  constructor(
    private _coursesServices: CoursesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.refresh()
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  refresh(){
    this.courses$ = this._coursesServices.list()
    .pipe(
      catchError(() => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  ngOnInit() {

  }

  onAdd() {
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  onEdit(courses: CoursesModel) {
    this.router.navigate(['edit', courses.id],{relativeTo: this.route});
  }

  onDelete(courses: CoursesModel) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: 'Tem certeza que deseja remover o curso?',
      });
  
      dialogRef.afterClosed().subscribe((result:boolean) => {
        if(result){
          this._coursesServices.delete(courses.id).subscribe(()=>{
            this.refresh()
            this._snackBar.open('Curso removido com sucesso!!','X',{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center'
            })
          },
          () => this.onError('Erro ao tentar remove cursos')
          );
        }
      });
    }
}
