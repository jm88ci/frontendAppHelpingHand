import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Usuario} from "../../auth/models/usuario.model";

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

}
