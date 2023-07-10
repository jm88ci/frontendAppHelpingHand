import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'footer';
  public date: Date;
  visible: boolean = false;

  constructor() {
    this.date = new Date();
  }
  showDialog() {
    this.visible = true;
  }
}

