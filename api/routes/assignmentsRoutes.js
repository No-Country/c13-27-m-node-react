const express = require('express');
const router = express.Router();

// Importo los handlers de materias
const getAllAssignmentsHandler = require('../handlers/assignmentsHandlers');

router.get('/allAssignments', getAllAssignmentsHandler); // Ruta para obtener todos las materias (ver como integrar con alumnos y profesores)

module.exports = router;
