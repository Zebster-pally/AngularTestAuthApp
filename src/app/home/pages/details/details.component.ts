import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: IPost = { userId: null, id: null, title: null, body: null }

  constructor(private productService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productService.selectPost(id).subscribe((data:IPost) => this.post = data);
  }

}
