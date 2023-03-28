import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { JogadoresService } from 'src/app/service/jogadores.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/interface/jogador';

@Component({
  selector: 'app-jogadores-table',
  templateUrl: './jogadores-table.component.html',
  styleUrls: ['./jogadores-table.component.css'],
})
export class JogadoresTableComponent implements OnInit {
  role = localStorage.getItem('role');

  jogadores: Jogador[] = [];
  displayedColumns: string[] = ['id', 'nome', 'posicao', 'time', 'editar'];

  constructor(
    private jogadoresService: JogadoresService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jogadoresService.getAll().subscribe((data) => {
      var jogadorResponse = JSON.parse(JSON.stringify(data));
      this.jogadores = jogadorResponse;
      console.log(this.jogadores);
    });
  }

  update(jogador: any) {
    this.router.navigateByUrl(`jogador/edit/${jogador.id}`);
  }
}
