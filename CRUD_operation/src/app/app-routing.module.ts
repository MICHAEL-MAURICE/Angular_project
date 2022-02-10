import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  {path:"", component: StudentsComponent},
  {path:"students", component: StudentsComponent},
  {path:"addstudent", component: AddStudentComponent},
  {path:"about", component: AboutComponent},
  {path:"students/:id", component:StudentDetailsComponent },
  {path:"students/update/:id", component: UpdateStudentComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
