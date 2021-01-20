import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/shared/models/comments.model';
import { IPost } from 'src/app/shared/models/post.model';
import { IUser } from 'src/app/shared/models/user.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service'
import { CommentsService } from 'src/app/shared/services/comments.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: IPost = { userId: null, id: null, title: null, body: null }

  user: IUser = { id: null, name: null, email: null }

  comments: IComment[]

  constructor(private postsService: PostsService, private usersService: UsersService, private commentsService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.postsService.getById(id).subscribe((data) => this.post = data);
    this.usersService.getById(id).subscribe((data) => this.user = data);
    this.commentsService.getByPostId(id).subscribe((data) => this.comments = data)
  }

}
