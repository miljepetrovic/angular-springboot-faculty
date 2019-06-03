import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { StatusComponent } from './components/status/status.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { FakultetService } from './services/fakultet.service';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSelect} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './components/core/author/author.component';
import { HelpComponent } from './components/core/help/help.component';
import { HomeComponent } from './components/core/home/home.component';
import { DepartmanService } from './services/departman.service';
import { StudentService } from './services/student.service';
import { StatusService } from './services/status.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmanComponent,
    StatusComponent,
    FakultetComponent,
    AuthorComponent,
    HelpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule
  ],
  providers: [FakultetService, DepartmanService, StudentService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
