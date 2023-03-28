import { CampeonatosTableComponent } from './feature/campeonatos/campeonatos-table/campeonatos-table.component';
import { EditUserComponent } from './feature/user/edit-user/edit-user.component';
import { UserTableComponent } from './feature/user/user-table/user-table.component';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { LoginServiceService } from './service/login-service.service';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './feature/register/register.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateUserComponent } from './feature/user/create-user/create-user.component';
import { ButtonAdicionarComponent } from './components/button-adicionar/button-adicionar.component';
import { ButtonExcluirComponent } from './components/button-excluir/button-excluir.component';
import { ButtonEditarComponent } from './components/button-editar/button-editar.component';
import { ButtonRegistrarComponent } from './components/button-registrar/button-registrar.component';
import { TimesTableComponent } from './feature/times/times-table/times-table.component';
import { EditTimesComponent } from './feature/times/edit-times/edit-times.component';
import { CreateTimesComponent } from './feature/times/create-times/create-times.component';
import { CreateCampeonatoComponent } from './feature/campeonatos/create-campeonato/create-campeonato.component';
import { EditCampeonatoComponent } from './feature/campeonatos/edit-campeonato/edit-campeonato.component';
import { CreateJogadorComponent } from './feature/jogadores/create-jogador/create-jogador.component';
import { JogadoresTableComponent } from './feature/jogadores/jogadores-table/jogadores-table.component';
import { EditJogadorComponent } from './feature/jogadores/edit-jogador/edit-jogador.component';
import { PartidasTableComponent } from './feature/partidas/partidas-table/partidas-table.component';
import { CreatePartidasComponent } from './feature/partidas/create-partidas/create-partidas.component';
import { EditPartidasComponent } from './feature/partidas/edit-partidas/edit-partidas.component';
import { JogosTableComponent } from './feature/mostrar_tabela_jogos/jogos-table/jogos-table.component';
import { InfoJogosComponent } from './feature/mostrar_tabela_jogos/info-jogos/info-jogos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    UserTableComponent,
    CreateUserComponent,
    TimesTableComponent,
    EditTimesComponent,
    CreateTimesComponent,
    CampeonatosTableComponent,
    CreateCampeonatoComponent,
    EditCampeonatoComponent,
    CreateJogadorComponent,
    JogadoresTableComponent,
    PartidasTableComponent,
    CreatePartidasComponent,
    EditPartidasComponent,
    JogosTableComponent,
    InfoJogosComponent,
    EditJogadorComponent,
    EditUserComponent,
    ButtonAdicionarComponent,
    ButtonExcluirComponent,
    ButtonEditarComponent,
    ButtonRegistrarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
