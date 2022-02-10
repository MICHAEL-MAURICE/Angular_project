import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';

import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { HeaderComponent } from './Components/header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AboutComponent } from './Components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    UpdateStudentComponent,
    ErrorComponent,
    StudentDetailsComponent,
    HeaderComponent,
    AddStudentComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
