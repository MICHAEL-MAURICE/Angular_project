import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  private baseUrl = "http://localhost:5000/students"
  constructor(private httpClient: HttpClient) {}

  getAllStudents(){
    return this.httpClient.get(this.baseUrl);
  }

  getStudentByID(id){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  addStudent(student){
    return this.httpClient.post(`${this.baseUrl}`,student);
  }

  updateStudent(id,student){
    return this.httpClient.put(`${this.baseUrl}/${id}`,student);
  }

  deleteStudent(id){
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
