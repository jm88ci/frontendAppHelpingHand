import { NgModule } from '@angular/core';
import {RippleModule} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {DividerModule} from "primeng/divider";


//Añadir aquí sólo los módulos de prime
@NgModule({
  exports: [
    RippleModule,
    MenubarModule,
    DividerModule
  ]
})
export class PrimengModule { }
