const express = require('express');
const router = express.Router();

// Importo los handlers de usuarios
const getAllStudentsHandler = require('../handlers/studentsHandlers'); // Con este no funciona
// const getAllUsersController = require('../controllers/users');

router.get('/allStudents', getAllStudentsHandler); // Ruta para obtener todos los usuarios (actualmente es de prueba)

module.exports = router;
