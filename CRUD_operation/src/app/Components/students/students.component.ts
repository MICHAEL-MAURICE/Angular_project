import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { StudentsDataService } from 'src/app/Services/studentsData.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students;
  constructor(private router:Router, private studentsService : StudentsDataService) { }

  ngOnInit(): void {
    this.studentsService.getAllStudents()
    .subscribe(
      (data)=> {this.students=data},
    (err)=> {console.log(err)}

    );
  }

  reload() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl])
  }

  deleteStudent(id){
    this.studentsService.deleteStudent(id)
    .subscribe(
      ()=> this.reload()
    )

  }

}
