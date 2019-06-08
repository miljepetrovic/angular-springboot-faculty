import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly API_URL = 'http://localhost:8083/student/';

  dataChange: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

     constructor(private httpClient: HttpClient){}

     public getStudenti(): Observable<Student[]>{
         this.httpClient.get<Student[]>(this.API_URL).subscribe(data => {
             this.dataChange.next(data);
         }, (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });

         return this.dataChange.asObservable();
     }

     public addStudent(student: Student) {
       this.httpClient.post(this.API_URL, student).subscribe();
     }

     public updateStudent(student: Student) {
       this.httpClient.put(this.API_URL, student).subscribe();
     }

     public deleteStudent(id: number) {
       this.httpClient.delete(this.API_URL + id).subscribe();
     }
}
