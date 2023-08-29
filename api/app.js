const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');

// Configuración de cors
app.use(cors());

// Importo el índex de rutas
const routes = require('./routes/index');

// Traigo variables de entorno
require('dotenv').config();
const PORT = process.env.PORT;

//Conexion a MongoAtlas DB (.env)  VS  conexion a DB local
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);
//Conecta a la DB, si no error log
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

//Configuración de sesión
const sessionConfig = {
  secret: 'secreto', // Si se utiliza, cambiar por variable de entorno
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

// Middleware para chequear si está logueado
const requerirLogin = (req, res, next) => {
  if (!req.session.dni) {
    // Si no hay dni en sesion, enviar a login
    return res.redirect('http://localhost:3000/login');
  } else {
    console.log(check);
    next();
  }
};

// Middleware para chequear permisos de profesor
const verificarProfesor = (req, res, next) => {
  if (req.session.role !== 'teacher') {
    throw new Error('No tiene permiso para acceder a la ruta');
  } else {
    next();
  }
};

app.get('/secreto', requerirLogin, (req, res) => {
  res.send(`ok`);
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

// Inicio el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
