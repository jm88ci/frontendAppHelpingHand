import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  private url = 'http://localhost:8080/puntuaciones';

  constructor(private httpClient: HttpClient) {}


  agregarPuntos(idUsuarioAcosado: number, idUsuarioAyuda: number, puntos: number): Observable<any> {

    if (idUsuarioAcosado === undefined || idUsuarioAyuda === undefined) {
      idUsuarioAcosado = 1; // TODO pongo las id a copón porque no las coge Solucionarlo.
      idUsuarioAyuda = 5;
    }
    return this.httpClient.post(`${this.url}/agregarPuntos/${idUsuarioAcosado}/${idUsuarioAyuda}/${puntos}`, {});
  }


}
