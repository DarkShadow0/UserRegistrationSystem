import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url: string;
  public user: User;
  private users: User[];
  // tslint:disable-next-line:variable-name
  private _userChanged = new Subject<void>();
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/user/';
  }

  get userChanged(){
    return this._userChanged;
  }
  public fecthAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  public deleteUserById(id: number): Observable<User>{
    return this.http.delete<User>(this.url + id).pipe(
      tap(() => {
        this._userChanged.next();
      })
    );
  }

  register(formData): Observable<any> {
    console.log(formData);
    return this.http.post(this.url, formData);
  }

  updateUser(formData, id) {
    console.log(formData + id);
    return this.http.put(this.url + id, formData);
  }

}
