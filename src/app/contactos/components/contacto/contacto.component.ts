import {Component} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private primengConfig: PrimeNGConfig) {
  }




  data = [
    { name: 'John Doe', phone: '123-456-7890', stars: 4 },
    { name: 'Jane Smith', phone: '987-654-3210', stars: 5 },
    { name: 'Alice Johnson', phone: '555-123-4567', stars: 3 },
    // Agrega más objetos según sea necesario
  ];


}
