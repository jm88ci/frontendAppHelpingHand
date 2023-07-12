import {Component} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../models/usuario.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    MessageService,
  ]
})
export class LoginComponent {
  public usuarioCorreo: string;
  public usuarioClave: string;

  public mensajeCredencialesNoValidas: boolean;
  public procesoLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
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
        next: (datos: Usuario[]) => {
          this.messageService.add({
            summary: "New user",
            detail: "User has been successfully saved",
            severity: "success",
            icon: "pi pi-user-plus"
          });
          console.log("tengo los datos", datos);
          this.procesoLogin = false;
          if (datos.length === 0) {
            this.mensajeCredencialesNoValidas = true;
          } else {
            this.mensajeCredencialesNoValidas = false;
            this.router.navigate(['/home']);
          }
        },
        error: (datos: HttpErrorResponse) => {
          this.messageService.add({
            summary: "New user",
            detail: "There was an error saving. " + datos.message,
            severity: "error",
            sticky: false,
            icon: "pi pi-user-plus"
          });
          this.procesoLogin = false;
          console.error("Hubo al error al autenticar", datos);
        }
      }
    );


    //this.router.navigate(['/usuarios']);
  }
}
