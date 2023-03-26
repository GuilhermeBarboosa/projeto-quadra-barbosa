import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { UserService } from '../service/user.service';
import { LoginClass } from '../shared/login-class';
import { NotifierService } from '../shared/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,
              private router: Router,
              private formBuilder: FormBuilder,
              private notifier: NotifierService) { }

  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['gui@gmail.com', Validators.required],
      senha: ['gui', Validators.required]
    })
  }

  login() {
    console.log(this.formulario);
    if(this.formulario.valid) {

      let loginClass = new LoginClass();
      loginClass.email = this.formulario.get('email')?.value;
      loginClass.senha = this.formulario.get('senha')?.value;

      this.loginService.login(loginClass).subscribe(
        (data) => {

          var loginResponse = JSON.parse(JSON.stringify(data));

          localStorage.setItem('token', loginResponse.token);

          this.loginService.verifyToken().subscribe(
            (data) => {
              loginResponse = JSON.parse(JSON.stringify(data));

              localStorage.setItem('userId', loginResponse.userId);

              this.router.navigateByUrl('/home');
            }
          )
        },
        (error) => {
            this.notifier.ShowError('Usuário ou senha inválidos!');
        }

        );

    }else{
      this.formulario.reset();
    }

  }

}
