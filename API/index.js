const express = require('express');

// Crear el servidor
const app = express();


// Puerto y arrancar el servidor
app.listen(4000, (s) => {
    console.log('Server is running on port 4000...');
});


