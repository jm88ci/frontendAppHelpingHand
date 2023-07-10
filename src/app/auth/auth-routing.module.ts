import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signUp', component: SignUpComponent},
      {path: '**', component: LoginComponent}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
