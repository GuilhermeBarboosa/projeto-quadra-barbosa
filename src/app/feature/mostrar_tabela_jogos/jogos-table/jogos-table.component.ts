import { CampeonatosService } from 'src/app/service/campeonatos.service';
import { Campeonatos } from './../../../interface/campeonato';
import { Router } from '@angular/router';
import { TimeCampeonatoService } from './../../../service/timecampeonato.service';
import { TimeCampeonato } from './../../../interface/timecampeonato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos-table',
  templateUrl: './jogos-table.component.html',
  styleUrls: ['./jogos-table.component.css'],
})
export class JogosTableComponent implements OnInit {
  campeonato: Campeonatos[] = [];
  displayedColumns: string[] = ['id', 'campeonato', 'info'];

  constructor(
    private campeonatosService: CampeonatosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.campeonatosService.getAll().subscribe((data) => {
      var timeCampeonatoResponse = JSON.parse(JSON.stringify(data));
      this.campeonato = timeCampeonatoResponse;
      console.log(this.campeonato);
    });
  }

  info(timecampeonato: any) {
    this.router.navigateByUrl(`jogos/info/${timecampeonato.id}`);
  }
}
