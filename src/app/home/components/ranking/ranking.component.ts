import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../usuarios/models/usuario.model";
import {UsuarioService} from "../../../usuarios/services/usuario.service";
import {HttpErrorResponse} from "@angular/common/http";
import {PuntuacionService} from "./services/puntuacion.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{
  public usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private puntuacionService: PuntuacionService) { }

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

  calcularEdad(fechaNacimiento: Date): number {
    if (!fechaNacimiento) {
      return 0; // Para que no me destroce la tabla pongo el valor predeterminado a cero en caso de que no haya fecha de nacimiento.
      // En algún momento es undefine preguntar a Salva
    }
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
    const edad = new Date(diferencia);
    return Math.abs(edad.getUTCFullYear() - 1970);
  }

  public sumarPuntosUsuario(usuarioAyudaId: number, usuarioAcosadoId: number) {
    // Obtener la puntuación actual del usuario desde la base de datos
    this.puntuacionService.obtenerPuntuacion(usuarioAyudaId, usuarioAcosadoId)
      .subscribe({
        next: (puntuacionActual) => {
          // Sumar tres puntos a la puntuación existente
          const nuevaPuntuacion = puntuacionActual + 3;

          // Actualizar la puntuación en la base de datos
          this.puntuacionService.actualizarPuntuacion(usuarioAyudaId, usuarioAcosadoId, nuevaPuntuacion)
            .subscribe({
              next: () => {
                console.log('Puntos sumados exitosamente');
              },
              error: (error) => {
                console.error('Error al actualizar la puntuación', error);
              },
              complete: () => {
                console.log('Operación completa');
              }
            });
        },
        error: (error) => {
          console.error('Error al obtener la puntuación', error);
        },
        complete: () => {
          console.log('Operación completa');
        }
      });
  }
}
