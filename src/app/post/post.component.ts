import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../api/service/service.service';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  isLoading = false;

  constructor(private route: ActivatedRoute, private service:ServiceService) {}

  ngOnInit(): void {
    this.post = postsMock.find((post) => post.id === +this.route.snapshot.params['id']);

    this.isLoading = true;
    this.service.getAll().subscribe(
      (resonse) => {
        this.posts = resonse;

        this.isLoading = false;
      }
    );
  }
}
