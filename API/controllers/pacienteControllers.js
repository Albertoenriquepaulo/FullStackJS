// Importamos el modelo
const Paciente = require('../models/Paciente')

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // Crear objeto de paceinte con datos de req.body
    const paciente = new Paciente(req.body);

    //TODO : insertar en la BD
    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}