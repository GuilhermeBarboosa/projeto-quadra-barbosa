import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginClass } from '../shared/login-class';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

constructor(private http: HttpClient) { }

  login(login: LoginClass) {
    return this.http.post('http://localhost:3000/users/login', login);
  }

  verifyToken() {
    return this.http.get('http://localhost:3000/users/verificartoken');
  }

}


