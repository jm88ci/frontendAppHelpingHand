import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InfoComponent} from "./informacion/components/info/info.component";
import {BodyComponent} from "./home/components/body/body.component";
import {ClasificacionComponent} from "./ranking/components/clasificacion/clasificacion.component";
import {PageConfigComponent} from "./config/page-config/page-config.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redireccionada a /home
  { path: 'home', component: BodyComponent },
  { path: 'ranking', component: ClasificacionComponent },
  { path: 'informacion', component: InfoComponent },
  { path: 'pageConfig', component: PageConfigComponent },
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
