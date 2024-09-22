import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //this.createSimpleObservable();
    this.getPost();
  }

  createSimpleObservable() {
    //creating a simple Observable
    const observable = new Observable<string>((observer) => {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });

    //subscribing to the observable
    observable.subscribe({
      next:(value) => console.log(value),
      complete: () => console.log('Observable completed'),
    });

    //Using an operator to transform the data

    observable.pipe(map((value) => value.toUpperCase())).subscribe({
      next:(value) => console.log(value),
      complete: () => console.log('Observable with map completed'),
    })
  }

  getPost() {
    this.dataService.getPosts()
    .pipe(
      // Transform the response to take only the first 5 posts
      map((posts:any[]) => posts.slice(0,5)) // Extract the first 5 posts
    )
    .subscribe({
      next: (data) => {
        this.posts = data;
        console.log(data);
      },
      error: (error) => console.log('Error fetching posts', error),
      complete: () => console.log('Completed fetching posts'),
    });
  }

}
