import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakultetService {
  private readonly API_URL = 'http://localhost:8083/fakultet/';

 dataChange: BehaviorSubject<Fakultet[]> = new BehaviorSubject<Fakultet[]>([]);

    constructor(private httpClient: HttpClient){}

    public getAllFakultet(): Observable<Fakultet[]>{
        this.httpClient.get<Fakultet[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        })

        return this.dataChange.asObservable();
    }
}
