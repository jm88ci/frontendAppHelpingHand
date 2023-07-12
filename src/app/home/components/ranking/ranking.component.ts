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
  public puntuacionActual: number;
  public puntuacionTotal: number;

  constructor(
    private usuarioService: UsuarioService,
    private puntuacionService: PuntuacionService) {
    this.puntuacionActual = 0;
    this.puntuacionTotal = 0;
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

  public sumarPuntosUsuario(usuario: Usuario) {
    this.puntuacionService.sumarPuntos(usuario.id, usuario.id).subscribe(() => {
      usuario.puntuacion += 3;
      this.puntuacionTotal = usuario.puntuacion;
    });
  }
}
