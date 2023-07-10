import { NgModule } from '@angular/core';
import {RippleModule} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";


//Añadir aquí sólo los módulos de prime
@NgModule({
  exports: [
    RippleModule,
    MenubarModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ]
})
export class PrimengModule { }
