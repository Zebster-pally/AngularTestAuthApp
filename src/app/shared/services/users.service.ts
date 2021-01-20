import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`)
  }
}
