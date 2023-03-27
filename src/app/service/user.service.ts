import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(`${environment.api}/users/` + id);
  }

  create(user: User) {
    return this.http.post(`${environment.api}/users`, user)
   }

}
