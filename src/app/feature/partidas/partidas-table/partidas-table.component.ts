import { Router } from '@angular/router';
import { TimeCampeonatoService } from './../../../service/timecampeonato.service';
import { TimeCampeonato } from './../../../interface/timecampeonato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidas-table',
  templateUrl: './partidas-table.component.html',
  styleUrls: ['./partidas-table.component.css']
})
export class PartidasTableComponent implements OnInit {
  timecampeonato: TimeCampeonato[] = [];
  displayedColumns: string[] = ['id', 'campeonato', 'time', 'editar'];

  constructor(
    private timeCampeonatoService: TimeCampeonatoService,
    private router: Router
  ) {}

  ngOnInit() {

    this.timeCampeonatoService.getAll().subscribe((data) => {
      var timeCampeonatoResponse = JSON.parse(JSON.stringify(data));
      this.timecampeonato = timeCampeonatoResponse;
      console.log(this.timecampeonato);
    });

  }

  update(timecampeonato: any) {
    this.router.navigateByUrl(`timecampeonato/edit/${timecampeonato.id}`);
  }

}
