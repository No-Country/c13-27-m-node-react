const express = require('express');
const app = express();

// Importo rutas de estudiantes
const studentsRoutes = require('./studentsRoutes');
const teachersRoutes = require('./teachersRoutes');
const assignmentsRoutes = require('./assignmentsRoutes');
const careersRoutes = require('./careersRoutes');
const homePageRoutes = require('./homePageRoutes');
const profileRoutes = require('./profileRoutes');

// Middlewares
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/assignments', assignmentsRoutes);
app.use('/careers', careersRoutes);
app.use('/homePage', homePageRoutes);
app.use('/profile', profileRoutes);

module.exports = app;
