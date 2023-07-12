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
      usuarioAcosadoEmail: usuarioAcosadoId,
      puntuacion: 3
    };

    return this.httpClient.post(this.url, puntuacion);
  }


}
