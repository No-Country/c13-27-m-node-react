const express = require('express');
const app = express();

// Importo rutas de usuarios
const usersRoutes = require('./usersRoutes');
const teachersRoutes = require('./teachersRoutes');

// Middlewares
app.use('/users', usersRoutes);
app.use('teachers', teacherRoutes);

module.exports = app;
