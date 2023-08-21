const express = require('express');
const router = express.Router();

// Importo los handlers de materias
const {
  getAllAssignmentsHandler,
  getAssignmentByIdHandler,
} = require('../handlers/assignmentsHandlers');

router.get('/allAssignments', getAllAssignmentsHandler); // Ruta para obtener todos las materias (ver como integrar con alumnos y profesores)
router.get('/:id', getAssignmentByIdHandler); // Ruta para obtener una materia usando el ID

module.exports = router;
