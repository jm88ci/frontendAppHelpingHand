import { NgModule } from '@angular/core';
import {RippleModule} from "primeng/ripple";


//Añadir aquí sólo los módulos de prime
@NgModule({
  exports: [
    RippleModule
  ]
})
export class PrimengModule { }
