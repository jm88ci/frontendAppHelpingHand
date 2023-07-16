import {Component} from '@angular/core';
import {ThemeService} from "../../../config/service/theme.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public date!: Date;
  visible: boolean = false;
  visiblePrivacidad: boolean = false;
  visibleTerminos: boolean = false;
  visibleCookies = false;
constructor(private themeService:ThemeService) {
}
  // Método para alternar entre aplicar color o no aplicar color
  get applyColor(): boolean {
    return this.themeService.getApplyColor();
  }

  showDialog(dialogo: string) {
    switch (dialogo) {
      case 'privacidad':
        this.visiblePrivacidad = true;
        break;
      case 'terminos':
        this.visibleTerminos = true;
        break;
      case 'cookies':
        this.visibleCookies = true;
        break;
    }

  }
}

