# CreacionAngular-Rec

##Instalación y Configuración

Descargamos Node de la pagina oficial y ejecutamos el siguiente comando:
- sudo apt install nodejs

Visitamos la pagina oficial de TypeScript y obtenemos el siguiente comando para instalarlo en el sistema:
- npm install typescript --save-dev

Visitamos la pagina oficial de Angular y obtenemos el siguiente comando para instalarlo en el sistema:
- npm install -g @angular/cli

##Creación del proyecto

Abrimos Visual y ejecutamos el siguiente comando en la dirección en la que queramos crear nuestro proyecto:
- ng new nombreProyecto

Para añadir el framework CSS de Bootstrap podemos usar el siguiente comando o añadir la siguiente etiqueta a nuestro codigo html:
comando: - npm install bootstrap@5.3.0-alpha1
etiqueta: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

Para crear el modulo y sus dos componentes ejecutamos los siguientes comandos:
- ng g m nombreModulo
- cd nombreModulo
- ng g c --inline-style=true --inline-template=true nombreComponente1
- ng g c nombreComponente2
