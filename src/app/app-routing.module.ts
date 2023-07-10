import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RankingComponent} from "./home/components/ranking/ranking.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redireccionada a /home
  { path: 'home', component: AppComponent },
  { path: 'chat', component: AppComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'informacion-general', component: AppComponent },
  { path: 'configuracion', component: AppComponent },
  { path: 'contactos', component: AppComponent },
  { path: 'login', component: AppComponent },
  { path: 'logout', component: AppComponent },
  // Agrega más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
