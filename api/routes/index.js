const express = require('express');
const app = express();

// Importo rutas de estudiantes
const studentsRoutes = require('./studentsRoutes');
const assignmentsRoutes = require('./assignmentsRoutes');

// Middlewares
app.use('/students', studentsRoutes);
app.use('/assignments', assignmentsRoutes);

module.exports = app;
