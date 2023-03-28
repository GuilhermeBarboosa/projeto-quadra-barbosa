import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CampeonatosService } from './../../../service/campeonatos.service';
import { Campeonatos } from './../../../interface/campeonato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonatos-table',
  templateUrl: './campeonatos-table.component.html',
  styleUrls: ['./campeonatos-table.component.css']
})
export class CampeonatosTableComponent implements OnInit {
  role = localStorage.getItem('role');

  campeonatos: Campeonatos[] = [];
  displayedColumns: string[] = ['id', 'campeonato', 'editar'];

  constructor(private campeonatosService: CampeonatosService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.campeonatosService.getAll().subscribe(
      (data) => {
        var campeonatoResponse = JSON.parse(JSON.stringify(data));
        this.campeonatos = campeonatoResponse;

      }
    );
  }


  update(campeonatos: any){
    this.router.navigateByUrl(`campeonato/edit/${campeonatos.id}`);
  }

}
