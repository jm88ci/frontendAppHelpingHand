import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import {PrimengModule} from "../primeng/primeng.module";
import {StyleClassModule} from "primeng/styleclass";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        PrimengModule,
        StyleClassModule,
        FormsModule
    ]
})
export class HomeModule { }
