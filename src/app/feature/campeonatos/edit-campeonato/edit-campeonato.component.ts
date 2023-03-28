import { Campeonatos } from './../../../interface/campeonato';
import { NotifierService } from 'src/app/shared/notifier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CampeonatosService } from 'src/app/service/campeonatos.service';

@Component({
  selector: 'app-edit-campeonato',
  templateUrl: './edit-campeonato.component.html',
  styleUrls: ['./edit-campeonato.component.css'],
})
export class EditCampeonatoComponent implements OnInit {

  formulario!: FormGroup;
  id = this.activedRouter.snapshot.params['id'];

  constructor(
    private activedRouter: ActivatedRoute,
    private campeonatosService: CampeonatosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.campeonatosService.getById(this.id).subscribe((data) => {
      var campeonatoResponse = JSON.parse(JSON.stringify(data));

      console.log(campeonatoResponse)

      this.formulario = this.formBuilder.group({
        campeonato: [campeonatoResponse.campeonato, Validators.required]
      });
    });
  }


  edit() {

    if (this.formulario.valid) {
      let campeonatoDTO: Campeonatos;

      campeonatoDTO = {
        campeonato: this.formulario.get('campeonato')?.value,
      };

      this.campeonatosService.edit(campeonatoDTO, this.id).subscribe(
        (data) => {
          this.notifier.ShowInfo('Campeonato editado com sucesso!');
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

  remove() {
    this.campeonatosService.delete(this.id).subscribe(
      (data) => {
        this.notifier.ShowError('Campeonato removido com sucesso!');
        this.router.navigateByUrl('/campeonato');
      },
      (error) => {
        this.notifier.ShowError(error.error);
      }
    );
  }
}
