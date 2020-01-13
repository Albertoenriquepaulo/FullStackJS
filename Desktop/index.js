const { app, BrowserWindow } = require('electron');

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        // resizable: false
        minWidth: 800,  // limite minimo de tamaño que puede setear el usuario
        minHeight: 600,
        center: true,
        show: false //Con esto la app no se muestra hasta tanto no se cargue todo, evita mostrar una pantalla vacia
    });

    // Cuando la app es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // Cargar HTML
    appWindow.loadFile('./index.html');

    // Cuando la app esté lista mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
        console.log(':0');
    });

}

app.on('ready', crearVentana);