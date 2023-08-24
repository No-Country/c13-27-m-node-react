const express = require('express');
const app = express();

// Importo rutas de estudiantes
const studentsRoutes = require('./studentsRoutes');
const teachersRoutes = require('./teachersRoutes');
const assignmentsRoutes = require('./assignmentsRoutes');
const careersRoutes = require('./careersRoutes');

// Middlewares
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/assignments', assignmentsRoutes);
app.use('/careers', careersRoutes);

module.exports = app;
