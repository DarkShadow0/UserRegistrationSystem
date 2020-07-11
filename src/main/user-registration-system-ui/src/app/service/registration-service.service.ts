import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/user/';
   }

   register(formData): Observable<any>{
     console.log(formData);
     return this.http.post(this.url, formData);
   }

   updateUser(formData, id){
     console.log(formData + id);
     return this.http.put(this.url + id, formData);
   }
}
