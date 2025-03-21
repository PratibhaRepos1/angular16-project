import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private apiService: ApiService){}

  posts: any[] = [];

  ngOnInit() {

    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts: ', error);
      }
    )

  }

}
