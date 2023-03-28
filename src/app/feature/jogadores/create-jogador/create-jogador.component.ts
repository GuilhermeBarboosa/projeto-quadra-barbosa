import { TimesService } from './../../../service/times.service';
import { User } from 'src/app/interface/user';
import { Times } from 'src/app/interface/times';
import { UserService } from './../../../service/user.service';
import { Jogador } from './../../../interface/jogador';
import { NotifierService } from 'src/app/shared/notifier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosicoesService } from './../../../service/posicoes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Posicoes } from 'src/app/interface/posicoes';
import { JogadoresService } from 'src/app/service/jogadores.service';

@Component({
  selector: 'app-create-jogador',
  templateUrl: './create-jogador.component.html',
  styleUrls: ['./create-jogador.component.css'],
})
export class CreateJogadorComponent implements OnInit {
  posicao!: Posicoes;
  jogador!: Jogador;
  formulario!: FormGroup;

  getPosicao: Posicoes[] = [];
  getUsers: User[] = [];
  getTimes: Times[] = [];

  constructor(
    private router: Router,
    private posicoesService: PosicoesService,
    private timesService: TimesService,
    private jogadorService: JogadoresService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.posicoesService.getAll().subscribe((data) => {
      var posicoesResponse = JSON.parse(JSON.stringify(data));
      this.getPosicao = posicoesResponse;
    });

    this.userService.getAll().subscribe((data) => {
      var usersResponse = JSON.parse(JSON.stringify(data));
      this.getUsers = usersResponse;
      console.log(this.getUsers)
    });

    this.timesService.getAll().subscribe((data) => {
      var timesResponse = JSON.parse(JSON.stringify(data));
      this.getTimes = timesResponse;
    });

    this.formulario = this.formBuilder.group({
      posicao: ['', Validators.required],
      time: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  create() {
    if (this.formulario.valid) {
      let responseDTO = {
        posicao: this.formulario.get('posicao')?.value,
        time: this.formulario.get('time')?.value,
        user: this.formulario.get('user')?.value,
      };
      this.jogador = responseDTO;

      this.jogadorService.create(this.jogador).subscribe(
        (data) => {
          this.notifier.ShowSuccess('Jogador cadastrado com sucesso!');
          this.router.navigateByUrl('/jogador');
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
