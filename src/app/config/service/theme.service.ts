import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly localStorageKey = 'selectedTheme';
  private applyColor: boolean = false;





  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadThemeFromStorage();
    this.applyColor = localStorage.getItem('applyColor') === 'true' || false;
  }
  private loadThemeFromStorage() {
    const storedTheme = localStorage.getItem(this.localStorageKey);
    if (storedTheme) {
      this.switchTheme(storedTheme);
    }
  }
  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
      localStorage.setItem(this.localStorageKey, theme);
    }
  }

  getApplyColor(): boolean {
    return this.applyColor;
  }

  toggleColor(): void {
    this.applyColor = !this.applyColor;
    localStorage.setItem('applyColor', String(this.applyColor));
  }
  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
  };
}
