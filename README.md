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
