import {Component} from '@angular/core';

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

