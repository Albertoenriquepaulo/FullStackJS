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
