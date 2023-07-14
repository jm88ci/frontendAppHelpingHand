import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly url: string;
  private _usuarioActivo!: Usuario;

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) {
    this.url = "http://localhost:8080/api/v1";
  }

  get usuarioActivo(): Usuario {
    return this._usuarioActivo;
  }



  public authorize(email: string, pass: string): Observable<Usuario> {
    const petition: string = `http://localhost:8080/api/v1/usuarios/search/findByEmailAndPass?email=${email}&pass=${pass}`;
    return this.httpClient.get<Usuario>(petition)
      .pipe(
        //"Pinchamos" la información
        tap((data: Usuario) => {
          if (data) {
            this._usuarioActivo = data;
          }

        })
      );
  }

  public authorizeById(id: number): Observable<Usuario> {
    const petition: string = `http://localhost:3000/usuarios/${id}`;
    return this.httpClient.get<Usuario>(petition);
  }

  public verificarLocalStorage(): Observable<boolean> {
    const idUsuarioActivoLocalStorage: string | null = localStorage.getItem("usuarioActivo");

    if (idUsuarioActivoLocalStorage == null) {
      //Esto es que no existe
      return of(false); // --> retornaría un Observable<boolean> con el valor false
    } else {
      //Esto es que si existe, y vamos a verificar que esa id exista
      return this.authorizeById(Number(idUsuarioActivoLocalStorage))
        .pipe(
          map((data: Usuario) => {
              return true;
            }
          )
        );
    }
  }
  public saveUser(user: Usuario): Observable<Usuario> {
    //El método post, recibe la url y el objeto<Usuario> que queremos enviar
    return this.httpClient.post<Usuario>(`${this.url}/usuarios`, user);
  }


  public logout() {
    localStorage.removeItem("usuarioActivo");
    this.router.navigate(["/auth/login"]);
  }

  public mostrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.url}/usuarios`);
  }

}
