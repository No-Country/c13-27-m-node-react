const express = require('express');
const usersRoutes = require('./usersRoutes');

const app = express();


// Middlewares
app.use('users', usersRoutes);

module.exports = app;


