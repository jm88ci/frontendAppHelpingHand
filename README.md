# FrontendAppHelpingHand

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Instrucciones para notificaciones-pwa

# Instalar dos paquetes de forma global y obtener vapid-keys en json

npm install web-push http-server -g
web-push generate-vapid-keys --json
{"publicKey":"BAs2xdpSsFVqF6TNToI-Oy_MAKVklJ3TVBa0egryXGuR4msiqc10DC_wnnR_2dYB0mvniikga8lIxWz6BDYzPP4","privateKey":"aShivgGSMXanLMGbiQRVhUFkzxoVaNImjOQ4h2hWkRU"}

# Instalar angular/pwa en nuestro proyecto. Importante situarse en nuestro directorio de angular

ng add @angular/pwa

# Creamos en el componente de nuestro frontend todo lo necesario para solicitar permisos de notificaciones (esto nos devolverá el endpoint del usuario) 
 HTML de mi componente

<div>
  <button (click)="suscribirseANotificaciones()">Solicitar</button>
</div>
<div>
  <code>{{respuesta | json}}</code>
</div>
 
  TS de mi componente

import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  public respuesta: any;
  // Usamos nuestra clave publica obtenida en nuestro json
  readonly VAPID_PUBLIC_KEY ="BAs2xdpSsFVqF6TNToI-Oy_MAKVklJ3TVBa0egryXGuR4msiqc10DC_wnnR_2dYB0mvniikga8lIxWz6BDYzPP4";

  constructor(private swPush: SwPush) {
  }
  suscribirseANotificaciones() {
    this.swPush.requestSubscription({serverPublicKey: this.VAPID_PUBLIC_KEY})
    .then(respuesta =>{this.respuesta = respuesta})
    .catch(error =>{this.respuesta = error})
  } 
  
}

# Después en nuestro servicio en el Backend realizamos las siguientes acciones

// Importar las dependencias necesarias
const webpush = require('web-push');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuración de claves VAPID
const vapidKeys = {
"publicKey": "BAs2xdpSsFVqF6TNToI-Oy_MAKVklJ3TVBa0egryXGuR4msiqc10DC_wnnR_2dYB0mvniikga8lIxWz6BDYzPP4",
"privateKey": "aShivgGSMXanLMGbiQRVhUFkzxoVaNImjOQ4h2hWkRU"
}

// Configurar las claves VAPID para webpush
webpush.setVapidDetails(
'mailto:anmoag5@gmail.com',
vapidKeys.publicKey,
vapidKeys.privateKey
);

// Configuración de Express.js y middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Función para enviar notificación
const enviarNotificacion = () => {

// Definir la suscripción y la notificación a enviar usando el endpoint que previamente habremos guardado en nuestra base de datos en el campo token
const suscripcion = {
endpoint: "https://fcm.googleapis.com/fcm/send/eQdJA3q_1D4:APA91bGMcNfqdBrV6XFO8VcOnQwFoPQWucqLsVs3pxysnJQZrkm_EhfwuctWDEiynNC8beLfqTs9GLu5KPUDELQW30B6mnRrbcoqn0Ct3nX57Un2nMJ6dygY0NB_1xXoSCua8odLi0jH",
expirationTime: null,
keys: {
p256dh: "BMGA6FK37wYPMVSAPTwsBFhEliOeWe8048Yfhx948kSzyxH_uc601mCX2tt6STwRLIrZGdYYWcy0T4r1ax47v2k",
auth: "ER4EM0XHOR1HZ6VkEsbW2g"
}
};

const notificacion = {
"notification": {
"title": "🆘🆘 Ayuda",
"body": "Necesito ayuda de una mano amiga",
"vibrate": [100, 50, 100],
"image": "https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160911091/62789234-cara-del-avatar-de-dibujos-animados-hombre-persona-de-sexo-masculino-ilustraci%C3%B3n-vectorial.jpg",
"actions": [
{
"action": "explore",
"title": "Voy a ayudarte, tranquilo"
}
]
}
};

// Enviar la notificación utilizando webpush
webpush.sendNotification(suscripcion, JSON.stringify(notificacion))
.then(respuesta => {
console.log('Enviado', respuesta);
}).catch(error => {
console.log('Error', error);
});
};

// Creamos la ruta para enviar notificación ahora lo haremos desde el postman
app.route('/api/enviar').post(enviarNotificacion);

// Iniciar el servidor HTTP
const httpServer = app.listen(9000, () => {
const address = httpServer.address();
const puerto = address.port;
console.log("HTTP Server inicia en http://localhost:" + puerto);
});

# De esta manera ya tendríamos implementadas las notificaciones push usando pwa sin servicios de terceros


## Obtener la geolocalización de cada usuario

# Usaremos la Api Geolocation incluida en PWA y usaremos el objeto window

window.navigator

// Esto nos devolverá un objeto complejo del que tomaremos el método getCurrentPosition() y lo que haremos es suscribirnos
// (al suscribirnos nos pedirá los permisos de ubicación)

const posicion = new Observable((observer) => {
  navigator.geolocation.getCurrentPosition(
  (data) => {
    observer.next(data);
  },
  (err) => {
    observer.error(err);
  });
});

const subscription = posicion.subscribe({
  next: (data) => {
    console.table(data);
  },
  error: (err) => {
    console.error(err);
  }
});

//En la respuesta nos mostrará una tabla en la que tendremos la longitud y la latitud (la ubicación del usuario) 
// la guardaremos en nuestra base de datos (tener en cuenta que es una ubicación en el momento que se solicita).
// si queremos una ubicación constante usaremos el método watchPosition(), este método nos devolverá de forma cíclica 
// la ubicación del usuario en su callback.
