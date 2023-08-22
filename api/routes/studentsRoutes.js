const express = require('express');
const router = express.Router();

// Importo los handlers de estudiantes
const {
    getAllStudentsHandler,
    studentLoginHandler
} = require('../handlers/studentsHandlers'); 

router.get('/allStudents', getAllStudentsHandler); // Ruta para obtener todos los usuarios (actualmente es de prueba)
router.get('/studentsLogin', studentLoginHandler)

module.exports = router;
