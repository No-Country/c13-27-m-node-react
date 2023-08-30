const express = require('express');
const router = express.Router();

// Importo los handlers de estudiantes
const {
  getAllStudentsHandler,
  studentLoginHandler,
  registerStudentHandler,
  getStudentByIdHandler,
  studentSelectionHandler,
} = require('../handlers/studentsHandlers');

router.get('/allStudents', getAllStudentsHandler); // Ruta para obtener todos los usuarios (actualmente es de prueba)
router.post('/studentsLogin', studentLoginHandler);
router.get('/:id', getStudentByIdHandler);

router.post('/registerStudent', registerStudentHandler); // Ruta para registrar un estudiante

router.put('/careerSelection/:id', studentSelectionHandler); // Ruta para modificar carrera y materias del alumno

module.exports = router;
