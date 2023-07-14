import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Usuario} from "../../auth/models/usuario.model";
import {Mensaje} from "../models/mensaje.model";

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost:8080/mensajes'; // URL de la API en el backend

  constructor(private http: HttpClient) { }

  obtenerUsuariosCercanos(): Observable<Usuario[]> {
    const url = `${this.apiUrl}/1/usuarios-cercanos`; // URL para obtener los usuarios cercanos
    return this.http.get<Usuario[]>(url);
  }

  enviarMensaje(mensaje: Mensaje): Observable<any> {
    const url = `${this.apiUrl}/enviar`;
    return this.http.post<any>(url, mensaje);
  }

}
