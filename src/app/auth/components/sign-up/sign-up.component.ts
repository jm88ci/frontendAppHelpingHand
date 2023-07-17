import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../models/usuario.model";
import {MessageService} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [
    MessageService,
  ]
})
export class SignUpComponent implements OnInit{
  // Page data
  public users: Usuario[];
  // User form
  userForm!: FormGroup;
  // State variables of a process
  public savingUser: boolean;
  public  mostrarRegistro: boolean;


  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.users = [];
    this.savingUser = false;
    this.mostrarRegistro = true;
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm() {
    this.userForm = this.formBuilder.group({
      idTipo: [{value: null, disabled: true}],
      email: ['', [Validators.required, Validators.email]],
      foto: [null, Validators.required],
      latitud: [{ value: null, disabled: true }],
      longitud: [{ value: null, disabled: true }],
      pass: ['', Validators.required],
      fechaNacimiento: [null, Validators.required],
      usuarioDesde: [null, Validators.required],
      token: [{value: null, disabled: true}],
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
      logueado: [{value: null, disabled: true}]
    });
  }
  public validateForm(){
    let user : Usuario = this.userForm.value;
    if (user.foto == null){
      user.foto = "https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170713209/82545738-ilustraci%C3%B3n-de-vector-de-dibujos-animados-sonriente-cara-de-personaje-de-cabeza-de-hombre.jpg";
    }

    if (user.latitud === 0){
      user.latitud = 40.7118;
    }

    if (user.longitud === 0){
      user.longitud = -74.0067;
    }

      this.saveUser(user);
    }

  public saveUser(user: Usuario) {

    this.savingUser = true;
    this.authService.saveUser(user).subscribe(
      {
        next: () => {

          this.messageService.add({
            summary: "Nuevo Usuario",
            detail: "El usuario ha sido creado",
            severity: "success",
            icon: "pi pi-user-plus"
          });
          this.savingUser = false;
        },
        error: (datos: HttpErrorResponse) => {
          this.messageService.add({
            summary: "Nuevo usuario",
            detail: "Error al crear el usuario " + datos.message,
            severity: "error",
            sticky: true,
            icon: "pi pi-user-plus"
          });
          this.savingUser = false;
        }
      }
    );
  }

  submitForm() {
    if (this.userForm.valid) {
      // Process the form here
      console.log(this.userForm.value);
    }
  }
}
