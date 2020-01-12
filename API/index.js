const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Crear el servidor
const app = express();

// Conectar a mongDB
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://root:1234@cluster0-am6vz.mongodb.net/test?retryWrites=true&w=majority/veterinaria', {
mongoose.connect('mongodb+srv://root:1234@cluster0-am6vz.mongodb.net/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Habilitar routing. Middleware de Express
app.use('/', routes())


// Puerto y arrancar el servidor
app.listen(4000, (s) => {
    console.log('Server is running on port 4000...');
});


