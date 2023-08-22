const express = require('express');
const router = express.Router();

// Importo los handlers de usuarios
const {
  getAllStudentsHandler,
  registerStudentHandler,
} = require('../handlers/studentsHandlers'); // Con este no funciona
// const getAllUsersController = require('../controllers/users');

router.get('/allStudents', getAllStudentsHandler); // Ruta para obtener todos los usuarios (actualmente es de prueba)
router.post('/registerStudent', registerStudentHandler); // Ruta para registrar un estudiante

module.exports = router;
