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

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly localStorageKey = 'selectedTheme';
  private applyColor: boolean = false;

  getApplyColor(): boolean {
    return this.applyColor;
  }

  toggleColor(): void {
    this.applyColor = !this.applyColor;
  }
  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
  };

  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadThemeFromStorage();
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

}
