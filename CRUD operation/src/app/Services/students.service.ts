import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl ="http://localhost:5000/students"
  constructor(private myclient:HttpClient) { }

getAllStudents(){
return this.myclient.get(this.baseUrl);
}

getStudentById(id){
  return this.myclient.get(`${this.baseUrl}/${id}`);
}

addStudent(student){
  return this.myclient.post(this.baseUrl,student);
}

updateStudent(id,student){
  return this.myclient.put(`${this.baseUrl}/${id}`,student);
}

DeleteStudent(id){
  return this.myclient.delete(`${this.baseUrl}/${id}`);
}


}
