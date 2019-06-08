import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

      },(error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
        return this.dataChanges.asObservable();
    }

  public addDepartman(departman: Departman) {
    this.httpClient.post(this.API_URL, departman).subscribe();
  }

  public updateDepartman(departman: Departman) {
    this.httpClient.put(this.API_URL, departman).subscribe();
  }
  public deleteDepartman(id: number) {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
