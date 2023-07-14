import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InfoComponent} from "./informacion/components/info/info.component";
import {BodyComponent} from "./home/components/body/body.component";
import {ClasificacionComponent} from "./ranking/components/clasificacion/clasificacion.component";
import {ContactoComponent} from "./contactos/components/contacto/contacto.component";
import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redireccionada a /home
  { path: 'home', component: BodyComponent },
  { path: 'ranking', component: ClasificacionComponent },
  { path: 'informacion', component: InfoComponent },
  { path: 'configuracion', component: AppComponent },
  { path: 'contactos', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: "**", redirectTo: "" }
  // Agrega más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
