export interface Usuario {
  id:              number;
  idTipo:          number;
  email:           string;
  foto:            string;
  latitud:         number;
  longitud:        number;
  pass:            string;
  fechaNacimiento: Date;
  usuarioDesde:    Date;
  token:           string;
  sexo:            string;
  nombre:          string;
  apellido1:       string;
  apellido2:       string;
  curso:           string;
  direccion:       string;
  ciudad:          string;
  codigoPostal:    number;
  pais:            string;
  telefono:        string;
  logueado:        boolean;
  puntuacion:      number;
}
