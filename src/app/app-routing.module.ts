import { CreateCampeonatoComponent } from './feature/campeonatos/create-campeonato/create-campeonato.component';

import { TimesTableComponent } from './feature/times/times-table/times-table.component';
import { CreateUserComponent } from './feature/user/create-user/create-user.component';
import { UserTableComponent } from './feature/user/user-table/user-table.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { EditUserComponent } from './feature/user/edit-user/edit-user.component';
import { EditTimesComponent } from './feature/times/edit-times/edit-times.component';
import { CreateTimesComponent } from './feature/times/create-times/create-times.component';
import { CampeonatosTableComponent } from './feature/campeonatos/campeonatos-table/campeonatos-table.component';
import { EditCampeonatoComponent } from './feature/campeonatos/edit-campeonato/edit-campeonato.component';
import { CreateJogadorComponent } from './feature/jogadores/create-jogador/create-jogador.component';
import { JogadoresTableComponent } from './feature/jogadores/jogadores-table/jogadores-table.component';
import { EditJogadorComponent } from './feature/jogadores/edit-jogador/edit-jogador.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserTableComponent,
  },
  {
    path: 'user/register',
    component: CreateUserComponent,
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent,
  },
  {
    path: 'time',
    component: TimesTableComponent,
  },
  {
    path: 'time/register',
    component: CreateTimesComponent,
  },
  {
    path: 'time/edit/:id',
    component: EditTimesComponent,
  },
  {
    path: 'campeonato',
    component: CampeonatosTableComponent,
  },
  {
    path: 'campeonato/register',
    component: CreateCampeonatoComponent,
  },
  {
    path: 'campeonato/edit/:id',
    component: EditCampeonatoComponent,
  },
  {
    path: 'jogador',
    component: JogadoresTableComponent,
  },
  {
    path: 'jogador/register',
    component: CreateJogadorComponent,
  },
  {
    path: 'jogador/edit/:id',
    component: EditJogadorComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
