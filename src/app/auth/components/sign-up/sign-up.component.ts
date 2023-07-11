import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../models/usuario.model";
import {MessageService} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({
      idTipo: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      foto: [null, Validators.required],
      latitud: [{ value: null, disabled: true }],
      longitud: [{ value: null, disabled: true }],
      pass: ['', Validators.required],
      fechaNacimiento: [null, Validators.required],
      usuarioDesde: [null, Validators.required],
      token: ['', Validators.required],
      sexo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      curso: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: [null, Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
      logueado: [false, Validators.required]
    });
  }
  submitForm() {
    if (this.usuarioForm.valid) {
      // Procesar el formulario aquí
      console.log(this.usuarioForm.value);
    }
  }


  handleFileUpload(event: any) {
    const file = event.files[0];
    this.usuarioForm.patchValue({
      foto: file
    });
  }
}
