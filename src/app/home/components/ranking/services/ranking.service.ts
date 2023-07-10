import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private urlBase = 'http://localhost/3000/'; //  la URL del backend

  constructor(private httpClient: HttpClient) { }

  obtenerRanking() {
    return this.httpClient.get(`${this.urlBase}/ranking`);
  }
}
