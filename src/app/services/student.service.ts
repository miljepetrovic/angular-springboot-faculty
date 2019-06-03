import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

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
         })

         return this.dataChange.asObservable();
     }
}
