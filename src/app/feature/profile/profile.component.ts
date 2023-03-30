import { JogadoresService } from './../../service/jogadores.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userResponse: any;
  jogadorResponse: any;
  error?: string ;

  constructor(private jogadorService: JogadoresService,
              private userService: UserService) { }

  ngOnInit() {
    const id = Number(localStorage.getItem('userId'));

    this.userService.getById(id).subscribe(
      (data) => {
        this.userResponse = JSON.parse(JSON.stringify(data));
        console.log(this.userResponse)
      }
    );

    this.jogadorService.getByJogadorUser(id).subscribe(
      (data) => {
        this.jogadorResponse = JSON.parse(JSON.stringify(data));
        console.log(this.jogadorResponse)
      },
    );
  }

}
