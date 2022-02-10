import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsDataService } from 'src/app/Services/studentsData.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id;
  student;
  constructor(private router:Router , private acitvRoute : ActivatedRoute ,private studService: StudentsDataService) {
    this.id = this.acitvRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.studService.getStudentByID(this.id)
    .subscribe(
      data => this.student = data,
      err => console.log(err)
    )
  }

  onUpdate(){
    this.studService.updateStudent(this.id, this.student)
    .subscribe(()=>this.router.navigate(["/"]))

  }


}
