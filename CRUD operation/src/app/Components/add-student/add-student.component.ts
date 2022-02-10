import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsDataService } from 'src/app/Services/studentsData.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(private router:Router ,private studService: StudentsDataService) {}

  ngOnInit(): void {
  }

  onStudentAdded(idInp, nameInp, ageInp, emailInp, cityInp, phoneInp ){

    let student = {
      id: parseInt(idInp.value),
      name: nameInp.value,
      age: parseInt(ageInp.value),
      email: emailInp.value,
      city: cityInp.value,
      phone: phoneInp.value
    }
    console.log(student)
    if(student.id&&student.name&&student.age&&student.city&&student.email&&student.phone)
    this.studService.addStudent(student)
    .subscribe(()=>this.router.navigate(["/"]))

    else{
      alert("Please Fill This Form ")
    }
  }


}
