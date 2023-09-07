const express = require('express');
const app = express();

// Importo rutas de estudiantes
const studentsRoutes = require('./studentsRoutes');
const teachersRoutes = require('./teachersRoutes');
const assignmentsRoutes = require('./assignmentsRoutes');
const careersRoutes = require('./careersRoutes');
const homePageRoutes = require('./homePageRoutes');
const profileRoutes = require('./profileRoutes');
const uploadsRoutes = require('./uploadsRoutes');

// Middlewares
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/assignments', assignmentsRoutes);
app.use('/careers', careersRoutes);
app.use('/homePage', homePageRoutes);
app.use('/profile', profileRoutes);
app.use('/upload', uploadsRoutes);

// Middleware para redireccionar al usuario a la pagina not found 404
app.use(async (req, res) => {
  res.redirect('http://localhost:3000/not-found');
});

module.exports = app;
