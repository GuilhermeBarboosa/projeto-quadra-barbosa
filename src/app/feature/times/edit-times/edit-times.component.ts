import { Times } from 'src/app/interface/times';
import { TimesService } from './../../../service/times.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.css'],
})
export class EditTimesComponent implements OnInit {
  formulario!: FormGroup;
  id = this.activedRouter.snapshot.params['id'];

  constructor(
    private activedRouter: ActivatedRoute,
    private timesService: TimesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.timesService.getById(this.id).subscribe((data) => {
      var timesResponse = JSON.parse(JSON.stringify(data));

      this.formulario = this.formBuilder.group({
        time: [timesResponse.time, Validators.required],
        qtd_pontos: [timesResponse.qtd_pontos, Validators.required],
        partidas_jogadas: [timesResponse.partidas_jogadas, Validators.required],
        qtd_jogadores: [0, Validators.required],
        vitorias: [timesResponse.vitorias, Validators.required],
        perdidas: [timesResponse.perdidas, Validators.required],
        empate: [timesResponse.empate, Validators.required],
      });
    });
  }

  edit() {

    if (this.formulario.valid) {
      let timeDTO: Times;

      timeDTO = {
        time: this.formulario.get('time')?.value,
        qtd_pontos: this.formulario.get('qtd_pontos')?.value,
        qtd_jogadores: this.formulario.get('qtd_jogadores')?.value,
        vitorias: this.formulario.get('vitorias')?.value,
        partidas_jogadas: this.formulario.get('partidas_jogadas')?.value,
        perdidas: this.formulario.get('perdidas')?.value,
        empate: this.formulario.get('empate')?.value,
      };

      this.timesService.edit(timeDTO, this.id).subscribe(
        (data) => {
          this.notifier.ShowInfo('Time editado com sucesso!');
          this.router.navigateByUrl('/time');
        },
        (error) => {
          this.notifier.ShowError(error.error);
        }
      );
    } else {
      this.notifier.ShowError('Formulário inválido!');
    }
  }

  remove() {
    this.timesService.delete(this.id).subscribe(
      (data) => {
        this.notifier.ShowError('Time removido com sucesso!');
        this.router.navigateByUrl('/time');
      },
      (error) => {
        this.notifier.ShowError(error.error);
      }
    );
  }
}
