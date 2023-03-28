import { Times } from './../../../interface/times';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/service/times.service';

@Component({
  selector: 'app-times-table',
  templateUrl: './times-table.component.html',
  styleUrls: ['./times-table.component.css']
})
export class TimesTableComponent implements OnInit {
  role = localStorage.getItem('role');
  times: Times[] = [];
  displayedColumns: string[] = ['id', 'time' , 'qtd_pontos', 'partidas', 'ganhadas', 'perdidas', 'empate', 'editar'];

  constructor(private timesService: TimesService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.timesService.getAll().subscribe(
      (data) => {
        var timesResponse = JSON.parse(JSON.stringify(data));
        this.times = timesResponse;

      }
    );
  }

  update(user: any){
    this.router.navigateByUrl(`time/edit/${user.id}`);
  }

}
