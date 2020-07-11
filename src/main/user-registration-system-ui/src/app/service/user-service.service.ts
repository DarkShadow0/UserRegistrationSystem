import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url: string;
  public user: User;
  private users: Observable<User[]>;
  private userChanged = new Subject<void>();
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/user/';
    this.users = this.http.get<User[]>(this.url);
  }

  public fecthAllUsers(): Observable<User[]>{
    return this.users;
  }

  public deleteUserById(id: number): Observable<User>{
    return this.http.delete<User>(this.url + id).pipe();
  }

}
