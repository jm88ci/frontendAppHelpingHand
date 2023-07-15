import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import {PrimengModule} from "../primeng/primeng.module";



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    InfoComponent
  ]
})
export class InformacionModule { }
