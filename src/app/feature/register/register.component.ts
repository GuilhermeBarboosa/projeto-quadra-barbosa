import { NotifierService } from './../../shared/notifier.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService) { }

  user!: User;
  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  registrar(){
    if(this.formulario.valid) {

      let userDTO = {
        nome: this.formulario.get('nome')?.value,
        email: this.formulario.get('email')?.value,
        senha: this.formulario.get('senha')?.value,
        idade: this.formulario.get('idade')?.value,
        role: this.formulario.get('role')?.value
      }

      this.user = userDTO

      this.userService.create(this.user).subscribe(
        (data) => {
          this.notifier.ShowSuccess('Usuário cadastrado com sucesso!');
          this.router.navigateByUrl('/login');
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
