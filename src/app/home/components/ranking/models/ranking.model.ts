export interface Puntuacion {
  id: number;
  usuarioAcosado: Usuario;
  usuarioAyuda: Usuario;
  puntuacion: number;
}

export interface Usuario {
  id: number;
  // Agregar aquí las propiedades correspondientes al usuario
  nombre: string;
  edad: number;
  // ...
}
