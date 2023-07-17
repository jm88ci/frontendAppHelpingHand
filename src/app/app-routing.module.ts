import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InfoComponent} from "./informacion/components/info/info.component";
import {ClasificacionComponent} from "./ranking/components/clasificacion/clasificacion.component";
import {PageConfigComponent} from "./config/page-config/page-config.component";
import {MensajeComponent} from "./mensajes/components/mensaje/mensaje.component";
import {ContactoComponent} from "./contactos/components/contacto/contacto.component";
import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redireccionada a /home
  { path: 'home', component: MensajeComponent },
  { path: 'ranking', component: ClasificacionComponent },
  { path: 'informacion', component: InfoComponent },
  { path: 'pageConfig', component: PageConfigComponent },
  { path: 'contactos', component: ContactoComponent },
  { path: 'login', component: AppComponent },
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
