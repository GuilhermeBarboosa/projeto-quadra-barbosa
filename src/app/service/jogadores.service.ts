
import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Times } from '../interface/times';
import { Jogador } from '../interface/jogador';

@Injectable({
  providedIn: 'root',
})
export class JogadoresService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${environment.api}/jogadores/` + id);
  }

  create(jogadores: Jogador) {
    return this.http.post(`${environment.api}/jogadores`, jogadores);
  }

  getAll() {
    return this.http.get(`${environment.api}/jogadores`);
  }

  edit(jogadores: Jogador, id: number) {

    return this.http.put(`${environment.api}/jogadores/${id}`, jogadores);
  }

  delete(id: number) {

    return this.http.delete(`${environment.api}/jogadores/${id}`);
  }

}
