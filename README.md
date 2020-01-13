## JavaScript UDEMY Training JUAN PABLO.

### Section 34 (Video 301): FullStack JavaScript: API en Express, Node y MongoDB

Proyecto del curso Udemy en español de JS, será un proyecto FullStack.
Backend en Mongo y Express.

### Getting Started

Lo primero generar un package.json que va manejar nuestras dependecencias y los scripts

```
npm init
```

## Par de dependencias para lo que es el proyecto y una de desarrollo

Las dos del proyecto

```
npm install express mongoose
```

La de desarrollo, esta lo que hará es que cada vez que hagamos cambios, reiniciará el servidor para ver los cambios sin tener que parar e iniciar nuevamente el server

```
npm install --save-dev nodemon
```

## 304. Conectando a MongoDB

- Cree un cluster en mongoDB Atlas -> https://cloud.mongodb.com, llamado Cluster0
- Installe MongoDB Compass lo conecté con el cluster y cree una BD llamada veterinaria:

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
npx create-react-app frontend
```

## 315. Creando la App y Primeros Pasos

Se eliminaron varios archivos del resultado de haber instalado el react, los de test por ejemplo
Obtenemos cierta info del siguiente link, facilitado por el teacher
[Link](https://gist.github.com/juanpablogdl/9f75be22c9fa50b6f0d7ccb63e03408c)

## 316. Agregando Routing y Componentes Principales

Instalamos **React router dom** de esta forma podemos ir a diferente páginas y cargar diferentes componentes. Es una dependencia que no viene en React, lo instalamos dentro del folder _frontend_

```
npm install react-router-dom
```

## 317. Agregando una base para las consultas a la API con Axios

Instalamos axios desde el folder **frontend**

```
npm install axios
```

## 319. Habilitando CORS

Hay que habilitar CORS, y esto se hace desde el lado del **Backend**, es decir desde el folder **API**.
Abrimos un terminal en ese folder y ejecutamos:

```
npm install cors
```

> Hay una manera de habilitar restricciones para acceso a los datos a través de CORS, no está implementada en este código, pero puede verse en el video, en el minuto 3:00.
