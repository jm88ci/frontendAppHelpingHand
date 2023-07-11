import {Usuario} from "./ranking.model";

export interface Puntuacion {
  id: number;
  usuarioAcosado: Usuario;
  usuarioAyuda: Usuario;
  puntuacion: number;
}
