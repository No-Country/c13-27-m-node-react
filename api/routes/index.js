const express = require('express');
const app = express();

// Importo rutas de usuarios
const usersRoutes = require('./usersRoutes');

// Middlewares
app.use('users', usersRoutes);

module.exports = app;
