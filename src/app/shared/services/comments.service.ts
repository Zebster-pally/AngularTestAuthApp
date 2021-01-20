import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = "https://jsonplaceholder.typicode.com/comments"

  constructor(private http: HttpClient) { }

  getByPostId(id:number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.url}?postId=${id}`)
  }
}
