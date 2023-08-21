const express = require('express');
const app = express();

// Importo rutas de estudiantes
const studentsRoutes = require('./studentsRoutes');

// Middlewares
app.use('/students', studentsRoutes);

module.exports = app;
