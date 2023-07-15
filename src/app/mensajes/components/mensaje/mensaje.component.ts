import {Component, OnInit} from '@angular/core';
import {MensajeService} from "../../services/mensaje.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../../../auth/models/usuario.model";
import {Mensaje} from "../../models/mensaje.model";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit{

  usuariosCercanos: Usuario[];
  frasesMotivacionales =
    ["Juntos contra el acoso escolar, podemos marcar la diferencia",
      "Levántate, sé la voz contra el acoso escolar.",
      "La diversidad es una fortaleza, celebremos nuestras diferencias.",
      "No estás solo, siempre hay ayuda disponible contra el acoso escolar.",
      "Rompe el ciclo del acoso escolar, alza tu voz.",
      "Un acto de bondad puede cambiarlo todo en la lucha contra el acoso escolar.",
      "La verdadera valentía está en proteger a otros, no en lastimarlos.",
      "Eres único y especial, no permitas que el acoso escolar te haga dudar.",
      "Creemos un cambio positivo, fomentemos la empatía y el respeto.",
      "No dejes que el acoso escolar defina quién eres, eres fuerte y digno de respeto."
    ]
  frase: string;
  dialogVisible: boolean;

  constructor(private mensajeService: MensajeService, private authService: AuthService) {
    this.usuariosCercanos = [];
    this.frase = this.obtenerFraseAleatoria();
    this.dialogVisible = false;
  }

  ngOnInit() {
    if ( this.authService.usuarioActivo) {
      this.dialogVisible = false;
    } else {
      this.dialogVisible = true;
    }


  }

  obtenerUsuariosCercanos(): Usuario[] {
    this.mensajeService.obtenerUsuariosCercanos().subscribe({
      next: (usuarios: Usuario[]) => {
        this.usuariosCercanos = usuarios;
        this.enviarMensaje();
      },
      error: (error: HttpErrorResponse) => {
        console.log("Error al traer los Usuarios", error)
      }
    });
    return this.usuariosCercanos

  }


  enviarMensaje() {
    this.usuariosCercanos.forEach(usuario => {
      const mensaje: Mensaje = {
        contenido: "Necesito ayuda",
        remitente: usuario,
        foto: usuario.foto,
        fechaEnvio: new Date(),
        leido: false
      };

      this.mensajeService.enviarMensaje(mensaje).subscribe({
        next: response => {
          console.log(`Mensaje enviado a usuario con id: ${usuario.id}`);
        },
        error: (error: HttpErrorResponse) => {
          console.error(`Error al enviar mensaje a usuario con id: ${usuario.id}`, error);
        }
      });
    });
  }

  public obtenerFraseAleatoria(): string {
    const indice = Math.floor(Math.random() * this.frasesMotivacionales.length);
    return this.frasesMotivacionales[indice];
  }

  public cerrarDialogo() {
    this.dialogVisible = false;
  }

}

