import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import {PrimengModule} from "../primeng/primeng.module";
import { RankingComponent } from './components/ranking/ranking.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    RankingComponent
  ],
    exports: [
        NavComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        RankingComponent
    ],
  imports: [
    CommonModule,
    PrimengModule,
    NgOptimizedImage,

  ]
})
export class HomeModule { }
