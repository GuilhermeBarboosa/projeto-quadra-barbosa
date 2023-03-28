import { Times } from 'src/app/interface/times';
import { Campeonatos } from './../../../interface/campeonato';
import { NotifierService } from 'src/app/shared/notifier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimesService } from 'src/app/service/times.service';
import { Router } from '@angular/router';
import { TimeCampeonatoService } from './../../../service/timecampeonato.service';
import { Component, OnInit } from '@angular/core';
import { TimeCampeonato } from 'src/app/interface/timecampeonato';
import { CampeonatosService } from 'src/app/service/campeonatos.service';

@Component({
  selector: 'app-create-partidas',
  templateUrl: './create-partidas.component.html',
  styleUrls: ['./create-partidas.component.css'],
})
export class CreatePartidasComponent implements OnInit {

  timeCampeonato!: TimeCampeonato;
  formulario!: FormGroup;

  getCampeonatos: Campeonatos[] = [];
  getTimes: Times[] = [];

  constructor(
    private router: Router,
    private timesService: TimesService,
    private campeonatosService: CampeonatosService,
    private timeCampeonatoService: TimeCampeonatoService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.timesService.getAll().subscribe((data) => {
      var timesResponse = JSON.parse(JSON.stringify(data));
      this.getTimes = timesResponse;
    });

    this.campeonatosService.getAll().subscribe((data) => {
      var campeonatosResponse = JSON.parse(JSON.stringify(data));
      this.getCampeonatos = campeonatosResponse;
    });

    this.formulario = this.formBuilder.group({
      time: ['', Validators.required],
      campeonato: ['', Validators.required],
    });
  }

  create() {
      if (this.formulario.valid) {
        let responseDTO = {
          campeonato: this.formulario.get('campeonato')?.value,
          time: this.formulario.get('time')?.value,
        };
        this.timeCampeonato = responseDTO;

        this.timeCampeonatoService.create(this.timeCampeonato).subscribe(
          (data) => {
            this.notifier.ShowSuccess('Partida cadastrado com sucesso!');
            this.router.navigateByUrl('/timecampeonato');
          },
          (error) => {
            this.notifier.ShowError(error.error);
          }
        );
      } else {
        this.notifier.ShowError('Formulário inválido!');
      }
    }
}
