import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from '../models/status';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private readonly API_URL = 'http://localhost:8083/status/';

  dataChange: BehaviorSubject<Status[]> = new BehaviorSubject<Status[]>([]);

     constructor(private httpClient: HttpClient){}

     public getAllStatus(): Observable<Status[]>{
         this.httpClient.get<Status[]>(this.API_URL).subscribe(data => {
             this.dataChange.next(data);
         })

         return this.dataChange.asObservable();
     }
}
