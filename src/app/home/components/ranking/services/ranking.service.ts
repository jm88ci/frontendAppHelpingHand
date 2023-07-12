import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private urlBase = 'http://localhost:8080'; //  la URL del backend

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) { }

  obtenerRanking() {
    return this.httpClient.get(`${this.urlBase}/ranking`);
  }
}
