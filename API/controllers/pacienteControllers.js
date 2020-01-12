// Importamos el modelo
const Paciente = require('../models/Paciente')

// Cuando se crea un nuevo paciente
exports.nuevoPaciente = async (req, res, next) => {
    // Crear objeto de paceinte con datos de req.body
    const paciente = new Paciente(req.body);

    // Insertar en la BD
    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    // Obtener de la BD
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene un solo paciente de la DB dado el ID
exports.obtenerPacienteByID = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualizar un paciente especifico de la DB dado el ID
exports.actualizarPacienteByID = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true // Esto es para que traiga el nuevo resultado ya modificado, sino trae el anterior, para ver el resultado
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
