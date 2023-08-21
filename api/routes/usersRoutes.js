const express = require('express');
const router = express.Router();

// Importo los handlers de usuarios
const getAllUsersHandler = require('../handlers/usersHandlers'); // Con este no funciona
// const getAllUsersController = require('../controllers/users');

router.get('/allUsers', getAllUsersHandler); // Ruta para obtener todos los usuarios (actualmente es de prueba)

module.exports = router;
