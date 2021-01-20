import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  post: IPost = { userId: null, id: null, title: null, body: null }

  limit: number = 5

  startPosition: number = 0

  posts: IPost[] = []

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.get(this.startPosition, this.limit).subscribe((data:IPost[]) => {
      this.posts = [...this.posts, ...data];
      this.startPosition += this.limit;
    })
  }

  loadPosts() {
    this.postsService.get(this.startPosition, this.limit).subscribe((data:IPost[]) => {
      this.posts = [...this.posts, ...data];
      this.startPosition += this.limit;
    })
  }

}
