const express = require('express');
const router = express.Router();

// Importo los handlers de usuarios
const usersHandlers = require('../handlers');

router.get('/allUsers', usersHandlers); // Ruta para obtener todos los usuarios (actualmente es de prueba)
