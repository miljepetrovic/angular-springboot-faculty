import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly API_URL = 'http://localhost:8083/student/';
  private readonly API_URL_BYID = 'http://localhost:8083/studentZaStatus/'

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

     public getStudentiPoStatusu(idStatusa): Observable<Student[]>{
       this.httpClient.get<Student[]>(this.API_URL_BYID + idStatusa).subscribe(data => {
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
