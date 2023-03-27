import { User } from './../../models/user';
import { NotifierService } from './../../shared/notifier.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

      let user = new User();
      user.email = this.formulario.get('email')?.value;
      user.senha = this.formulario.get('senha')?.value;
      user.nome = this.formulario.get('nome')?.value;
      user.idade = this.formulario.get('idade')?.value;
      user.role = this.formulario.get('role')?.value;

      this.userService.create(user).subscribe(
        (data) => {
          this.notifier.ShowSuccess('Usuário cadastrado com sucesso!');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          this.notifier.ShowError(error.error);
        }


        );

    }
  }

}
