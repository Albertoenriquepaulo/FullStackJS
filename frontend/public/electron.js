const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev'); //Con esta libreria sabremos si estamos en desarrollo o producción

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        resizable: true,
        minWidth: 600,  // limite minimo de tamaño que puede setear el usuario
        minHeight: 400,
        center: true,
        show: false, //Con esto la app no se muestra hasta tanto no se cargue todo, evita mostrar una pantalla vacia
        icon: 'icon.png'
    });

    // Cargar URL
    appWindow.loadURL(
        // Esto también permite que los cambios que haga en la app se reflejen en la app windows automaticamente, HOTRELOAD
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, "../build/index.html")}`
    );

    // // Cuando la app es cerrada
    // appWindow.on('closed', () => {
    //     appWindow = null;
    // });



    // Cuando la app esté lista mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });

}

app.on('ready', crearVentana);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


// app.on('activate', () => {
//     if (appWindow === null) {
//         app.quit();
//     }
// });