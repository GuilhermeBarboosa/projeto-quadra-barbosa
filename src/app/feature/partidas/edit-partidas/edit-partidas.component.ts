import { Times } from 'src/app/interface/times';
import { Campeonatos } from './../../../interface/campeonato';
import { TimeCampeonatoService } from './../../../service/timecampeonato.service';
import { CampeonatosService } from 'src/app/service/campeonatos.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import { TimesService } from 'src/app/service/times.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TimeCampeonato } from 'src/app/interface/timecampeonato';

@Component({
  selector: 'app-edit-partidas',
  templateUrl: './edit-partidas.component.html',
  styleUrls: ['./edit-partidas.component.css'],
})
export class EditPartidasComponent implements OnInit {
  formulario!: FormGroup;
  id = this.activedRouter.snapshot.params['id'];

  getCampeonatos: Campeonatos[] = [];
  getTimes: Times[] = [];

  constructor(
    private activedRouter: ActivatedRoute,
    private timesService: TimesService,
    private campeonatosService: CampeonatosService,
    private timeCampeonatoService: TimeCampeonatoService,
    private router: Router,
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

    this.timeCampeonatoService.getById(this.id).subscribe((data) => {
      var timeCampeonatoResponse = JSON.parse(JSON.stringify(data));

      this.formulario = this.formBuilder.group({
        time: [timeCampeonatoResponse.time, Validators.required],
        campeonato: [timeCampeonatoResponse.campeonato, Validators.required],
      });
    }
    );
  }

  edit(){
    if(this.formulario.valid) {

      let responseDTO: TimeCampeonato;

      responseDTO = {
        campeonato: this.formulario.get('campeonato')?.value,
        time: this.formulario.get('time')?.value,
      };

      this.timeCampeonatoService.edit(responseDTO, this.id).subscribe(
        (data) => {
          this.notifier.ShowInfo('Partida editado com sucesso!');
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

  remove(){
    this.timeCampeonatoService.delete(this.id).subscribe(
      (data) => {
        this.notifier.ShowError('Partida removido com sucesso!');
        this.router.navigateByUrl('/timecampeonato');
      },
      (error) => {
        this.notifier.ShowError(error.error);
      }
      );
  }
}
