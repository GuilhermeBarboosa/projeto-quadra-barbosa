import { Campeonatos } from './../interface/campeonato';

import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Times } from '../interface/times';

@Injectable({
  providedIn: 'root',
})
export class CampeonatosService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${environment.api}/campeonatos/` + id);
  }

  create(campeonatos: Campeonatos) {
    return this.http.post(`${environment.api}/campeonatos`, campeonatos);
  }

  getAll() {
    return this.http.get(`${environment.api}/campeonatos`);
  }

  edit(campeonatos: Campeonatos, id: number) {

    return this.http.put(`${environment.api}/campeonatos/${id}`, campeonatos);
  }

  delete(id: number) {

    return this.http.delete(`${environment.api}/campeonatos/${id}`);
  }

}
