import { CreateUserComponent } from './feature/user/create-user/create-user.component';
import { UserTableComponent } from './feature/user/user-table/user-table.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { EditUserComponent } from './feature/user/edit-user/edit-user.component';

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
