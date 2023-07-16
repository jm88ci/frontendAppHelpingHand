import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfigComponent } from './page-config/page-config.component';
import {PrimengModule} from "../primeng/primeng.module";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {DockModule} from "primeng/dock";



@NgModule({
  declarations: [
    PageConfigComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    RadioButtonModule,
    InputSwitchModule,
    DockModule
  ]
})
export class ConfigModule { }
