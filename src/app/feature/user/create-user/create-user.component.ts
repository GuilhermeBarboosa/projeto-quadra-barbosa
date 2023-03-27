import { NotifierService } from 'src/app/shared/notifier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../service/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user!: User;
  formulario!: FormGroup;

  constructor(private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['a@gmail.com', Validators.required],
      senha: ['a', Validators.required],
      nome: ['a', Validators.required],
      idade: ['2', Validators.required],
      role: ['1', Validators.required]
    })
  }

  create(){
    console.log(this.formulario)

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
          this.router.navigateByUrl('/user');
        },
        (error) => {
          this.notifier.ShowError(error.error);
        }


        );

    }
  }


}
