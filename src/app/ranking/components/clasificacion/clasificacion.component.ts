import { Component } from '@angular/core';
import {Usuario} from "../../../usuarios/models/usuario.model";
import {UsuarioService} from "../../../usuarios/services/usuario.service";
import {PuntuacionService} from "../../services/puntuacion.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {
  public usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private puntuacionService: PuntuacionService) {

  }

  ngOnInit() {


  }

  public obtenerArrayDeUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (usuarios: any) => {
        console.log("llegan los usuarios", usuarios)
        this.usuarios = usuarios._embedded.usuarios;
      },
      error: (error: HttpErrorResponse) => {
        console.log("No están los Usuarios", error)
      },
      complete: () => {
        // Se ejecuta cuando la suscripción se completa
      }
    });
  }

  calcularEdad(fechaNacimiento: string): number {
    let fechaDate : Date = new Date(fechaNacimiento);
    const fechaActual = new Date();
    if (!fechaNacimiento) {
      return 0;
    }
    return fechaActual.getFullYear() - fechaDate.getFullYear();
  }

  agregarPuntos(idUsuarioAcosado: number, idUsuarioAyuda: number, puntos: number): void {
    this.puntuacionService.agregarPuntos(idUsuarioAcosado, idUsuarioAyuda, puntos).subscribe({
      next: response => {
        console.log('Puntos agregados exitosamente', response);
        // Aquí puedes manejar la respuesta de tu servidor, como refrescar la puntuación mostrada en la pantalla
      },
      error: err => {
        console.error('Ha ocurrido un error al agregar los puntos', err);
      }
    });
  }

}
