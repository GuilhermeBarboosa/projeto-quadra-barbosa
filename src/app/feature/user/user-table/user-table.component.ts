import { Router } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})


export class UserTableComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'idade', 'role', 'editar'];


  constructor(private userService: UserService,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (data) => {
        var usersResponse = JSON.parse(JSON.stringify(data));
        this.users = usersResponse;

      }
    );
  }

  update(user: any){
    this.router.navigateByUrl(`user/edit/${user.id}`);
  }

}
