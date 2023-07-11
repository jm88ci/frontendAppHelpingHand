import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuarioActivo: Usuario | undefined;

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) {
  }

  get usuarioActivo(): Usuario | undefined {
    return {...this._usuarioActivo!};
  }

  public autorizar(correo: string, clave: string): Observable<Usuario[]> {
    const peticion: string = `http://localhost:8080/api/v1/usuarios/search/findByEmailAndPass?email=${correo}&pass=${clave}`;
    return this.httpClient.get<Usuario[]>(peticion)
      .pipe(
        //"Pinchamos" la información
        tap((datos: Usuario[]) => {
          if (datos.length > 0) {
            console.log("interceptamos la petición")
            //Guardamos el usuario activo y válido
            this._usuarioActivo = datos[0];
            //Y también guardamos su id en el navegador (para que no se pierda al refrescar la página)
          }

        })
      );
  }

  public autorizarPorId(id: number): Observable<Usuario> {
    const peticion: string = `http://localhost:3000/usuarios/${id}`;
    return this.httpClient.get<Usuario>(peticion);
  }

  public verificarLocalStorage(): Observable<boolean> {
    const idUsuarioActivoLocalStorage: string | null = localStorage.getItem("usuarioActivo");

    if (idUsuarioActivoLocalStorage == null) {
      //Esto es que no existe
      return of(false); // --> retornaría un Observable<boolean> con el valor false
    } else {
      //Esto es que si existe, y vamos a verificar que esa id exista
      return this.autorizarPorId(Number(idUsuarioActivoLocalStorage))
        .pipe(
          map((datos: Usuario) => {
              this._usuarioActivo = datos; // Guardamos en el servicio el usuario activo
              return true;
            }
          )
        );
    }
  }

  public logout() {
    this._usuarioActivo = undefined;
    localStorage.removeItem("usuarioActivo");
    this.router.navigate(["/auth/login"]);
  }



}
