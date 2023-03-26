import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { LoginClass } from '../shared/login-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,
              private formBuilder: FormBuilder) { }

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
          let token = JSON.parse(JSON.stringify(data));

          console.log(token.token);

          // var headers_object = new HttpHeaders().set("x-access-token", token.token);

          // this.loginService.verifyToken().subscribe(
          //   (data) => {
          //     console.log(data);
          //   }
          // )
        })

    }else{
      this.formulario.reset();
    }

  }

}
