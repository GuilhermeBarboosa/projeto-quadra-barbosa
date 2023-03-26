import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../shared/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private notifier: NotifierService) { }

  ngOnInit() {
    this.notifier.ShowSuccess('Login realizado com sucesso!');
  }

}
