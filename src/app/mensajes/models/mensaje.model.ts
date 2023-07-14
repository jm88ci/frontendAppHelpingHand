import {Usuario} from "../../auth/models/usuario.model";

export interface Mensaje {
  contenido: string;
  foto: string;
  remitente: Usuario;
  fechaEnvio: Date;
  leido: boolean;
}
