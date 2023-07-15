import {Component, OnInit} from '@angular/core';
import {Contacto} from '../../models/contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactos: Contacto[];
  constructor() {
    this.contactos = [];
  }

  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    this.contactos = [
      { nombre: 'Marisa Gutierrez Ponce', puesto: 'Direct@r del Centro', telefono: '123456789', correo: 'director@centro.edu', valoracion: '⭐⭐⭐⭐⭐' },
      { nombre: 'Manuel Sanchez Izquierdo', puesto: 'Jef@ de Estudios', telefono: '987654321', correo: 'jefedeestudios@centro.edu', valoracion: '⭐⭐⭐⭐⭐' },
      { nombre: 'Amparo Martos Ortega', puesto: 'Orientad@r', telefono: '567890123', correo: 'orientador@centro.edu', valoracion: '⭐⭐⭐⭐⭐' },
      { nombre: 'Dr. Manuel Aguilera Fuentes', puesto: 'Psicólog@', telefono: '789012345', correo: 'psicologo@centro.edu', valoracion: '⭐⭐⭐⭐⭐' },
      { nombre: 'Dra. Isabel Núñez Derecho', puesto: 'Psicólog@', telefono: '543210987', correo: 'psiquiatra@centro.edu', valoracion: '⭐⭐⭐⭐⭐' }
    ];
  }
}
