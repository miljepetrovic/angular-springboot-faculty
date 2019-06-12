import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Departman } from '../models/departman';
import { Fakultet } from '../models/fakultet';

@Injectable({
  providedIn: 'root'
})
export class DepartmanService {
  private readonly  API_URL ='http://localhost:8083/departman/';
  private readonly API_URL_BYID = 'http://localhost:8083/departmanZaFakultet/'

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

    public getDepartmanPoFakultetu(idFakulteta): Observable<Departman[]>{
      this.httpClient.get<Departman[]>(this.API_URL_BYID + idFakulteta).subscribe(data => {
        this.dataChanges.next(data);
      }, (error: HttpErrorResponse) => {
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
