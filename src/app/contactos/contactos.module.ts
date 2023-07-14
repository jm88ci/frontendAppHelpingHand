import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactoComponent} from './components/contacto/contacto.component';
import {PrimengModule} from "../primeng/primeng.module";


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    ContactoComponent
  ]
})
export class ContactosModule {
}
