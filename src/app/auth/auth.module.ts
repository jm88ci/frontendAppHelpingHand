import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {PrimengModule} from "../primeng/primeng.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PasswordModule} from "primeng/password";
import {DialogModule} from "primeng/dialog";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    PasswordModule,
    DialogModule,
    CheckboxModule
  ]
})
export class AuthModule { }
