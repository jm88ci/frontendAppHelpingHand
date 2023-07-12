import {Usuario} from "../../auth/models/usuario.model";


export interface Puntuacion {
  id: number;
  usuarioAcosado: Usuario;
  usuarioAyuda: Usuario;
  puntuacion: number;
}
