import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  get(startPosition: number, limit: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.url}?_start=${startPosition}&_limit=${limit}`)
  }

  getById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/${id}`)
  }
}
