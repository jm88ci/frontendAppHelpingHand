import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfigComponent } from './page-config/page-config.component';
import {PrimengModule} from "../primeng/primeng.module";



@NgModule({
  declarations: [
    PageConfigComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ConfigModule { }
