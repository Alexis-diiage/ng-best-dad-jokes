import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  slug!: string;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.post = postsMock.find((post) => post.slug === this.route.snapshot.params['slug']);

    this.isLoading = true;
    this.service.getAll().subscribe(
      (response) => {
        this.posts = response;

        this.isLoading = false;
      }
    );

    this.route.params.subscribe(
      (response) => {
        this.slug = this.route.snapshot.params['slug'];
        this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);
        this.isLoading = false;
      }
    );
  }
}
