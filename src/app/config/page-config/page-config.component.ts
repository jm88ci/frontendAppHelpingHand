import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from "../service/theme.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent{

  @Input() minimal: boolean = false;

  scales: number[] = [12, 13, 14, 15, 16];

  constructor(
    private themeService: ThemeService,
  ) {
  }
  cambiarColor(): void {
    this.themeService.toggleColor();
  }

  get scale(): number {
    return this.themeService.config.scale;
  }

  set scale(_val: number) {
    this.themeService.config.scale = _val;
  }


  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }


  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

}
