import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students
  constructor(private mystudentservese:StudentsService) { }

  ngOnInit(): void {
    this.mystudentservese.getAllStudents().subscribe(

      (res)=>{this.students=res;

      console.log(this.students)
      },
      (error)=>{}
    )
  }

}
