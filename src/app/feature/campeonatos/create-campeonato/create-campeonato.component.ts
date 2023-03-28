import { NotifierService } from 'src/app/shared/notifier.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Campeonatos } from './../../../interface/campeonato';
import { Component, OnInit } from '@angular/core';
import { CampeonatosService } from 'src/app/service/campeonatos.service';

@Component({
  selector: 'app-create-campeonato',
  templateUrl: './create-campeonato.component.html',
  styleUrls: ['./create-campeonato.component.css'],
})
export class CreateCampeonatoComponent implements OnInit {
  campeonato!: Campeonatos;
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private campeonatosService: CampeonatosService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      campeonato: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  create() {

    if (this.formulario.valid) {
      let campeonatosDTO = {
        campeonato: this.formulario.get('campeonato')?.value,
      };

      this.campeonato = campeonatosDTO;

      this.campeonatosService.create(this.campeonato).subscribe(
        (data) => {
          this.notifier.ShowSuccess('Campeonato cadastrado com sucesso!');
          this.router.navigateByUrl('/campeonato');
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
