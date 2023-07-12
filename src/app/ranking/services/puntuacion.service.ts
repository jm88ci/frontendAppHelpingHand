import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  private url = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) {}


  sumarPuntos( idUsuarioAyuda: number, puntos: number): Observable<any> {
    console.log("Ayuda",idUsuarioAyuda);
    return this.httpClient.post(`${this.url}/agregarPuntos/${idUsuarioAyuda}/${puntos}`, {});
  }


}
