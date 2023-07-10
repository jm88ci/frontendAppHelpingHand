import { Component } from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public elementos: MenuItem [];

  constructor() {
    this.elementos = [
      {
        label: "Home",
        icon: PrimeIcons.HOME,
        routerLink: "/"
      },
      {
        label: "Chat",
        icon: PrimeIcons.COMMENT,
        routerLink: "/"
      },
      {
        label: "Información",
        icon: PrimeIcons.INFO_CIRCLE,
        routerLink: "/"
      },
      {
        label: "Ranking",
        icon: PrimeIcons.CHART_BAR,
        routerLink: "/ranking"
      },
      {
        label: "Configuración",
        icon: PrimeIcons.COG,
        routerLink: "/"
      },
      {
        label: "Contactos",
        icon: PrimeIcons.BOOK,
        routerLink: "/"
      },
      {
        label: "Login",
        icon: PrimeIcons.LOCK,
        items: [
          {
            label: "Usuario",
            icon: PrimeIcons.USER,
            routerLink: "/usuarios"
          },
          {
            label: "Administrador",
            icon: PrimeIcons.SHIELD,
            routerLink: "/usuarios/listados"
          },
          {label: "Invitado",
            icon: PrimeIcons.USERS,
            routerLink: "/usuarios/estadisticas"}
        ]
      },
      {
        label: "Logout",
        icon: PrimeIcons.POWER_OFF,
        routerLink: "/"
      }

    ];
  }
}
