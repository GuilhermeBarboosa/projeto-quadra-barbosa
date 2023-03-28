import { TimeCampeonato } from './../interface/timecampeonato';
import { Campeonatos } from './../interface/campeonato';

import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Times } from '../interface/times';

@Injectable({
  providedIn: 'root',
})
export class TimeCampeonatoService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${environment.api}/timecampeonato/` + id);
  }

  create(timecampeonato: TimeCampeonato) {
    return this.http.post(`${environment.api}/timecampeonato`, timecampeonato);
  }

  getAll() {
    return this.http.get(`${environment.api}/timecampeonato`);
  }

  edit(timecampeonato: TimeCampeonato, id: number) {

    return this.http.put(`${environment.api}/timecampeonato/${id}`, timecampeonato);
  }

  delete(id: number) {

    return this.http.delete(`${environment.api}/timecampeonato/${id}`);
  }

}
