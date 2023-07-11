import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../models/usuario.model";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:8080/api/v1/usuarios';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
}
