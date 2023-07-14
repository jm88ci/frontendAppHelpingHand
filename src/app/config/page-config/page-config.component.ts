import { Component } from '@angular/core';
import {ThemeService} from "../service/theme.service";

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent {

  constructor(private themeService: ThemeService) {}

  selectedState: any = null;

  states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1:any = null;

  city2:any = null;

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

}
