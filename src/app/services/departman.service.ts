import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Departman } from '../models/departman';

@Injectable({
  providedIn: 'root'
})
export class DepartmanService {
  private readonly  API_URL ='http://localhost:8083/departman/';
  dataChanges: BehaviorSubject<Departman[]> = new BehaviorSubject<Departman[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getDepartmani(): Observable<Departman[]> {
      this.httpClient.get<Departman[]>(this.API_URL).subscribe(data => {
        this.dataChanges.next(data);
      })
        return this.dataChanges.asObservable();
    }
}
