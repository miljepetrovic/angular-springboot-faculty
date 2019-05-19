import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { StudentComponent } from './components/student/student.component';
import { StatusComponent } from './components/status/status.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HelpComponent } from './components/core/help/help.component';

const routes: Routes = [
  {path: 'fakultet', component: FakultetComponent},
  {path: 'departman', component: DepartmanComponent},
  {path: 'student', component: StudentComponent},
  {path: 'status', component: StatusComponent},
  {path: 'home', component: HomeComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
