import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
];

@NgModule({
  imports:[RouterModule.forChild(routes)]
})

export class AppRoutingModule {}
