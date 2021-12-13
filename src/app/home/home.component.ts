import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service/service.service';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = postsMock
  isLoading = false;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAll().subscribe(
      (resonse) => {
        this.posts = resonse;
        this.isLoading = false;
      }
    );
  }

}
