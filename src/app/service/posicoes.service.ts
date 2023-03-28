import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Times } from '../interface/times';
import { Posicoes } from '../interface/posicoes';

@Injectable({
  providedIn: 'root',
})
export class PosicoesService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${environment.api}/posicoes/` + id);
  }

  getAll() {
    return this.http.get(`${environment.api}/posicoes`);
  }

}
