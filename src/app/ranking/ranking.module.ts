import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimengModule} from "../primeng/primeng.module";
import {ClasificacionComponent} from "./components/clasificacion/clasificacion.component";




@NgModule({
  declarations: [
    ClasificacionComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,

  ]
})
export class RankingModule { }
