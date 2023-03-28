import { NotifierService } from 'src/app/shared/notifier.service';
import { TimesService } from './../../../service/times.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Times } from 'src/app/interface/times';

@Component({
  selector: 'app-create-times',
  templateUrl: './create-times.component.html',
  styleUrls: ['./create-times.component.css'],
})
export class CreateTimesComponent implements OnInit {
  time!: Times;
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private timesService: TimesService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      time: ['', Validators.required],
      qtd_pontos: ['', Validators.required],
      partidas_jogadas: ['', Validators.required],
      qtd_jogadores: [0, Validators.required],
      vitorias: ['', Validators.required],
      perdidas: ['', Validators.required],
      empate: ['', Validators.required],
    });
  }

  create() {
    // console.log(this.formulario)

    if (this.formulario.valid) {
      let timeDTO = {
        time: this.formulario.get('time')?.value,
        qtd_pontos: this.formulario.get('qtd_pontos')?.value,
        qtd_jogadores: this.formulario.get('qtd_jogadores')?.value,
        vitorias: this.formulario.get('vitorias')?.value,
        partidas_jogadas: this.formulario.get('partidas_jogadas')?.value,
        perdidas: this.formulario.get('perdidas')?.value,
        empate: this.formulario.get('empate')?.value,
      };

      this.time = timeDTO;

      this.timesService.create(this.time).subscribe(
        (data) => {
          this.notifier.ShowSuccess('Time cadastrado com sucesso!');
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
}
