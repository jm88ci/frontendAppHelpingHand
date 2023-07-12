import { Component } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../models/usuario.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuarioCorreo: string;
  public usuarioClave: string;

  public mensajeCredencialesNoValidas: boolean;
  public procesoLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.usuarioCorreo = "";
    this.usuarioClave = "";
    this.mensajeCredencialesNoValidas = false;
    this.procesoLogin = false;
  }

  public login() {
    this.procesoLogin = true;
    this.authService.authorize(this.usuarioCorreo, this.usuarioClave).subscribe(
      {
        next: (datos: Usuario[])=>{
          console.log("tengo los datos",datos);
          this.procesoLogin = false;
          if (datos.length === 0){
            this.mensajeCredencialesNoValidas = true;
          } else {
            this.mensajeCredencialesNoValidas = false;
            this.router.navigate(['/home']);
          }
        },
        error: (datos: HttpErrorResponse) => {
          this.procesoLogin = false;
          console.error("Hubo al error al autenticar", datos);
        }
      }
    );


    //this.router.navigate(['/usuarios']);
  }
}
