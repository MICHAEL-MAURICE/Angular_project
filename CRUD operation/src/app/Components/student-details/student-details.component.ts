import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsDataService } from 'src/app/Services/studentsData.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id;
  student;
  constructor(private activatedRoute: ActivatedRoute, private studentsService: StudentsDataService) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.studentsService.getStudentByID(this.id)
    .subscribe(
      (data) => {this.student = data, console.log(data)},
      err => console.log(err)
    )
  }

}
