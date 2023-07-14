import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./home/home.module";
import {PrimengModule} from "./primeng/primeng.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {InformacionModule} from "./informacion/informacion.module";
import {RankingModule} from "./ranking/ranking.module";
import {ConfigModule} from "./config/config.module";
import {MensajesModule} from "./mensajes/mensajes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    PrimengModule,
    SharedModule,
    AuthModule,
    InformacionModule,
    RankingModule,
    ConfigModule,
    MensajesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
