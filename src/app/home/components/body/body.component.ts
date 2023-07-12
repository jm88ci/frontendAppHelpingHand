import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  frasesMotivacionales =
    ["Juntos contra el acoso escolar, podemos marcar la diferencia",
      "Levántate, sé la voz contra el acoso escolar.",
      "La diversidad es una fortaleza, celebremos nuestras diferencias.",
      "No estás solo, siempre hay ayuda disponible contra el acoso escolar.",
      "Rompe el ciclo del acoso escolar, alza tu voz.",
      "Un acto de bondad puede cambiarlo todo en la lucha contra el acoso escolar.",
      "La verdadera valentía está en proteger a otros, no en lastimarlos.",
      "Eres único y especial, no permitas que el acoso escolar te haga dudar.",
      "Creemos un cambio positivo, fomentemos la empatía y el respeto.",
      "No dejes que el acoso escolar defina quién eres, eres fuerte y digno de respeto."
    ]

  frase: string;
  dialogVisible: boolean;


  constructor() {
    this.frase = this.obtenerFraseAleatoria();
    this.dialogVisible = true;
  }

  public obtenerFraseAleatoria(): string {
    const indice = Math.floor(Math.random() * this.frasesMotivacionales.length);
    return this.frasesMotivacionales[indice];
  }

  cerrarDialogo() {
    this.dialogVisible = false;
  }

}
