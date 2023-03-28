
import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Times } from '../interface/times';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${environment.api}/times/` + id);
  }

  create(times: Times) {
    return this.http.post(`${environment.api}/times`, times);
  }

  getAll() {
    return this.http.get(`${environment.api}/times`);
  }

  edit(times: Times, id: number) {

    return this.http.put(`${environment.api}/times/${id}`, times);
  }

  delete(id: number) {

    return this.http.delete(`${environment.api}/times/${id}`);
  }

}
