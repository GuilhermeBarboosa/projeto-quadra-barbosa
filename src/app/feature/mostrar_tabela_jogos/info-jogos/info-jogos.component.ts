import { TimeCampeonato } from './../../../interface/timecampeonato';
import { NotifierService } from 'src/app/shared/notifier.service';
import { TimesService } from 'src/app/service/times.service';
import { TimeCampeonatoService } from './../../../service/timecampeonato.service';
import { CampeonatosService } from 'src/app/service/campeonatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Times } from 'src/app/interface/times';
import { Campeonatos } from './../../../interface/campeonato';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-jogos',
  templateUrl: './info-jogos.component.html',
  styleUrls: ['./info-jogos.component.css'],
})
export class InfoJogosComponent implements OnInit {
  formulario!: FormGroup;
  id = this.activedRouter.snapshot.params['id'];

  partidas: TimeCampeonato[] = [];
  displayedColumns: string[] = ['id', 'time'];

  getCampeonatos: Campeonatos[] = [];
  getTimes: Times[] = [];

  constructor(
    private activedRouter: ActivatedRoute,
    private timeCampeonatoService: TimeCampeonatoService,
  ) {}

  ngOnInit() {
    this.timeCampeonatoService.getAllJogos(this.id).subscribe((data) => {
      var timeCampeonatoResponse = JSON.parse(JSON.stringify(data));
      this.partidas = timeCampeonatoResponse;
      console.log(this.partidas)
    });
  }
}
