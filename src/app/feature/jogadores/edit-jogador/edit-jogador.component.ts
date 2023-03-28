import { Times } from 'src/app/interface/times';
import { User } from 'src/app/interface/user';
import { Posicoes } from 'src/app/interface/posicoes';
import { JogadoresService } from './../../../service/jogadores.service';
import { TimesService } from 'src/app/service/times.service';
import { PosicoesService } from './../../../service/posicoes.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import { UserService } from './../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/interface/jogador';

@Component({
  selector: 'app-edit-jogador',
  templateUrl: './edit-jogador.component.html',
  styleUrls: ['./edit-jogador.component.css'],
})
export class EditJogadorComponent implements OnInit {
  formulario!: FormGroup;
  id = this.activedRouter.snapshot.params['id'];

  getPosicao: Posicoes[] = [];
  getUsers: User[] = [];
  getTimes: Times[] = [];

  constructor(
    private activedRouter: ActivatedRoute,
    private posicoesService: PosicoesService,
    private timesService: TimesService,
    private jogadorService: JogadoresService,
    private userService: UserService,
    private router: Router,
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

    this.jogadorService.getById(this.id).subscribe((data) => {
      var jogadorResponse = JSON.parse(JSON.stringify(data));

      this.formulario = this.formBuilder.group({
        posicao: [jogadorResponse.posicao, Validators.required],
        time: [jogadorResponse.time, Validators.required],
        user: [jogadorResponse.user, Validators.required],
      });
    });
  }

  edit(){
    if(this.formulario.valid) {

      let responseDTO: Jogador;

      responseDTO = {
        posicao: this.formulario.get('posicao')?.value,
        time: this.formulario.get('time')?.value,
        user: this.formulario.get('user')?.value,
      };

      this.jogadorService.edit(responseDTO, this.id).subscribe(
        (data) => {
          this.notifier.ShowInfo('Jogador editado com sucesso!');
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

  remove(){
    this.jogadorService.delete(this.id).subscribe(
      (data) => {
        this.notifier.ShowError('Jogador removido com sucesso!');
        this.router.navigateByUrl('/jogador');
      },
      (error) => {
        this.notifier.ShowError(error.error);
      }
      );
  }
}
