import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import {PrimengModule} from "../primeng/primeng.module";



@NgModule({
  declarations: [
    MensajeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class MensajesModule { }
