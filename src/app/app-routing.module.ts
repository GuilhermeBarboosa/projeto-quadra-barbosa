import { AuthGuardService } from './guards/auth-guard.service';
import { CreateCampeonatoComponent } from './feature/campeonatos/create-campeonato/create-campeonato.component';

import { TimesTableComponent } from './feature/times/times-table/times-table.component';
import { CreateUserComponent } from './feature/user/create-user/create-user.component';
import { UserTableComponent } from './feature/user/user-table/user-table.component';

import { NgModule } from '@angular/core';
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
import { PartidasTableComponent } from './feature/partidas/partidas-table/partidas-table.component';
import { CreatePartidasComponent } from './feature/partidas/create-partidas/create-partidas.component';
import { EditPartidasComponent } from './feature/partidas/edit-partidas/edit-partidas.component';
import { JogosTableComponent } from './feature/mostrar_tabela_jogos/jogos-table/jogos-table.component';
import { InfoJogosComponent } from './feature/mostrar_tabela_jogos/info-jogos/info-jogos.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { LoginGuardService } from './guards/login-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'user',
    component: UserTableComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'user/register',
    component: CreateUserComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'time',
    component: TimesTableComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'time/register',
    component: CreateTimesComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'time/edit/:id',
    component: EditTimesComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'campeonato',
    component: CampeonatosTableComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'campeonato/register',
    component: CreateCampeonatoComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'campeonato/edit/:id',
    component: EditCampeonatoComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'jogador',
    component: JogadoresTableComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'jogador/register',
    component: CreateJogadorComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'jogador/edit/:id',
    component: EditJogadorComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'timecampeonato',
    component: PartidasTableComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'timecampeonato/register',
    component: CreatePartidasComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'timecampeonato/edit/:id',
    component: EditPartidasComponent,
    canActivate: [AuthGuardService, LoginGuardService],
    data: {
      role: 'ADM',
    },
  },
  {
    path: 'jogos',
    component: JogosTableComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'jogos/info/:id',
    component: InfoJogosComponent,
    canActivate: [LoginGuardService]
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
