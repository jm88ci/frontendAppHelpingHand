import { Component } from '@angular/core';
import {MensajeService} from "../../services/mensaje.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../../../auth/models/usuario.model";

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  usuariosCercanos: Usuario[];

  constructor(private mensajeService: MensajeService) {
    this.usuariosCercanos = [];
  }

  ngOnInit() {
    this.obtenerUsuariosCercanos();
  }

  obtenerUsuariosCercanos() {
    this.mensajeService.obtenerUsuariosCercanos().subscribe({
      next: (usuarios: Usuario[]) => {
        console.log("Tenemos los usuariosCercanos", usuarios);
        this.usuariosCercanos = usuarios;
      },
      error: (error: HttpErrorResponse) => {
        console.log("Error al traer los Usuarios", error)
      }
    });
  }


}
