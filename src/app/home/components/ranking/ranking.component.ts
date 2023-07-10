import {Component, OnInit} from '@angular/core';
import {RankingService} from "./services/ranking.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{
  users: any[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit() {

    this.rankingService.obtenerRanking().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error: any) => {
        // Manejar el error
      },
      complete: () => {
        // Se ejecuta cuando la suscripción se completa
      }
    });

  }

}
