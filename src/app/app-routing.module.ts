import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InfoComponent} from "./informacion/components/info/info.component";
import {BodyComponent} from "./home/components/body/body.component";

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Ruta inicial redireccionada a /home
  { path: 'home', component: BodyComponent },
  { path: 'chat', component: AppComponent },
  { path: 'ranking', component: AppComponent },
  { path: 'informacion', component: InfoComponent },
  { path: 'configuracion', component: AppComponent },
  { path: 'contactos', component: AppComponent },
  { path: 'login', component: AppComponent },
  { path: 'logout', component: AppComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: "**", redirectTo: "" }
  // Agrega más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
