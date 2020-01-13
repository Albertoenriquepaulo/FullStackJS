## JavaScript UDEMY Training JUAN PABLO.

### Section 34 (Video 301): FullStack JavaScript: API en Express, Node y MongoDB

Proyecto del curso Udemy en español de JS, será un proyecto FullStack.
Backend en Mongo y Express.

### Getting Started

Lo primero generar un package.json que va manejar nuestras dependecencias y los scripts

```
$ npm init
```

## Par de dependencias para lo que es el proyecto y una de desarrollo

Las dos del proyecto

```
$ npm install express mongoose
```

La de desarrollo, esta lo que hará es que cada vez que hagamos cambios, reiniciará el servidor para ver los cambios sin tener que parar e iniciar nuevamente el server

```
$ npm install --save-dev nodemon
```

## 304. Conectando a MongoDB. (MONGODB ATLAS)

- Use mongoDb Atlas, el teacher no lo usa, lo implementé para aprender y tener la DB en la nube
- Cree un cluster en mongoDB Atlas -> https://cloud.mongodb.com, llamado Cluster0
- Installe MongoDB Compass lo conecté con el cluster y cree una BD llamada veterinaria, dentro de esta un documento o Collection llamado pacientes y es aqui donde están los datos

```
mongodb+srv://root:<PASSWORD>@cluster0-am6vz.mongodb.net/test?retryWrites=true&w=majority
```

## 308. Enviando una petición hacia el servidor

Con Insomnia probamos con un POST que devolvia valores.

```
POST: http://localhost:4000/pacientes

{
  "mensaje": "El cliente se agregó correctamente"
}
```

## 309. Leyendo los contenidos de una petición con body-parser

Usando bodyParser. Desde Insomnia y con un console log vimos en el cmd que si recibe los datos. Es justo lo que hace bodyParser

```
POST: http://localhost:4000/pacientes
{
  "nombre": "Hook",
  "propietario": "Alberto",
  "fecha": "2020-01-12",
  "hora": "10:30",
  "sintomas": "Aqui algunos sintomas"
}
```

## 310. Insertando un registro en la BD

Se corrigió la cadena de conexion, se usa la misma usada para conectar Compass

> cadena de conexión: mongodb+srv://root:1234@cluster0-am6vz.mongodb.net/veterinaria

```
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:1234@cluster0-am6vz.mongodb.net/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
```

## 315. Creando la App y Primeros Pasos

La idea es tener el BackEnd y FronEnd separados, dice el instructor que es el futuro del frontend. Ejecutamos el siguiente comando en la carpeta padre de "API Folder"

```
$ npx create-react-app frontend
```

## 315. Creando la App y Primeros Pasos

Se eliminaron varios archivos del resultado de haber instalado el react, los de test por ejemplo
Obtenemos cierta info del siguiente link, facilitado por el teacher
[Link](https://gist.github.com/juanpablogdl/9f75be22c9fa50b6f0d7ccb63e03408c)

## 316. Agregando Routing y Componentes Principales

Instalamos **React router dom** de esta forma podemos ir a diferente páginas y cargar diferentes componentes. Es una dependencia que no viene en React, lo instalamos dentro del folder _frontend_

```
$ npm install react-router-dom
```

## 317. Agregando una base para las consultas a la API con Axios

Instalamos axios desde el folder **frontend**

```
$ npm install axios
```

## 319. Habilitando CORS

Hay que habilitar CORS, y esto se hace desde el lado del **Backend**, es decir desde el folder **API**.
Abrimos un terminal en ese folder y ejecutamos:

```
$ npm install cors
```

> Hay una manera de habilitar restricciones para acceso a los datos a través de CORS, no está implementada en este código, pero puede verse en el video, en el minuto 3:00.

## 329. Sweet Alert para eliminar una Cita

Agregaremos un alerta de **Sweet Alert** para eliminar un registro de la BD, aqui los ejemplos y las instrucciones de como instalarlo
[Sweet Alert](https://sweetalert2.github.io/#examples)

```
$ npm install sweetalert2
```

## 331. Creando el Proyecto e Instalando Electron

Primero debemos crear el archivo _package.json_ porque las dependencias de esta apliacción serán diferentes a las de la API y las del frontend, para esto basta con ejecutar:

```
$ npm init
```

Con la ejecución del comando, lo primero que nos pregunta es el _package name_ y nos sugiere el nombre _desktop_ se lo cambiamos porque es un nombre muy común _fullstackjs-desktop_

Instalamos [electron](https://electronjs.org/), importante verificar la version de node minima que requiere la instalación, esto en los release de la página se puede ver fácilmente.
En nuestro caso instalamos **The latest version**

```
$ npm i -D electron@latest
```

## 336. Compilando la App para distribución

- Añadimos el icono en el index.js del Desktop folder
- Instalamos una dependencia que nos permite crear los instalables, es una dependencia de desarrollo

```
$ npm install --save-dev electron-builder
```

- Terminada la instalación, _package.json_ de Desktop folder, creamos un segundo script.

```
"dist": "electron-builder -w" // Para Windows
"dist": "electron-builder -l" // Para Linux
"dist": "electron-builder -l" // Para Mac
```

Ejecutamos:

```
$ npm run dist
```

- Finalmente Se crean los archivos en un folder llamado **dist**, en esta carpeta estará el ejecutable/instalador _.exe_ de la app

## 337. Agregando Electron sobre la App existente

- Nos aseguramos de estar en la carpeta donde esta el proyecto, en este caso _frontend_, e instalaremos alguna dependencias de desarrollo
  Podemos crear una copia de la carpeta, duplicar el proyecto, etc

```
$ npm install --save-dev cross-env electron-is-dev
```

- Instalamos otras dependencias que no son de desarrollo

```
$ npm install concurrently wait-on electron electron-builder typescript
```

> Todos estos cambios los podemos ir viendo en el _package.json_ del folder frontend

-Tambien añadimos al _package.json_ de frontend folder, lo siguiente

```
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test",
    "react-eject": "react-scripts eject",
    "electron-build": "electron-builder",
    "releas": "yarn react-build && electron-builder --publish=always",
    "build": "yarn react-build && yarn electron-build",
    "start": "concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\""
  },
  "main": "public/electron.js",
  "homepage": "./",
```

> Añadimos el prefijo _react_ a los 4 primeros, el resto, investigar para que

## Estos procedimientos de Electron son aplicables además de REACT a cualquier proyecto de Angular, VUE, JQuery y JS Puro
