import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://jsonplaceholder.typicode.com/posts'; //dummy api

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}
