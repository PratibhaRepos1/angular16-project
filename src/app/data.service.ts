import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  //Fetching data using HttpClient, which returns an Observable
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
