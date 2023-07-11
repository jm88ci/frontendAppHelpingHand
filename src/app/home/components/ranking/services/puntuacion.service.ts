import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  private url = 'http://localhost:8080/api/v1/puntuaciones';

  constructor(private httpClient: HttpClient) {}

  public sumarPuntos(usuarioAyudaId: number, usuarioAcosadoId: number): Observable<any> {
    const puntuacion = {
      usuarioAyudaId: usuarioAyudaId,
      usuarioAcosadoId: usuarioAcosadoId,
      puntuacion: 3
    };

    return this.httpClient.post(this.url, puntuacion);
  }

  public obtenerPuntuacion(usuarioAyudaId: number, usuarioAcosadoId: number): Observable<number> {
    const urlObtener = `${this.url}?usuarioAyudaId=${usuarioAyudaId}&usuarioAcosadoId=${usuarioAcosadoId}`;
    return this.httpClient.get<number>(urlObtener);
  }

  public actualizarPuntuacion(usuarioAyudaId: number, usuarioAcosadoId: number, nuevaPuntuacion: number): Observable<any> {
    const urlActualizar = `${this.url}?usuarioAyudaId=${usuarioAyudaId}&usuarioAcosadoId=${usuarioAcosadoId}`;
    const body = { puntuacion: nuevaPuntuacion };
    return this.httpClient.put(urlActualizar, body);
  }
}
