// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    //TODO : insertar en la BD
    console.log(req.body);
    res.json({ mensaje: 'El cliente se agregó correctamente' });
}