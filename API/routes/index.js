const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function () {
    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoPaciente);


    // Obtiene todos los registros de paciente de la DB
    router.get('/pacientes', pacienteController.obtenerPacientes);

    // Obtiene un solo paciente de la DB dado el ID
    router.get('/pacientes/:id', pacienteController.obtenerPacienteByID);
    return router;
}