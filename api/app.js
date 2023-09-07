const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const routes = require('./routes/index');


// Configuración de cors
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

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
  name: 'session',
  secret: 'secreto', // Si se utiliza, cambiar por variable de entorno
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/upload', express.static(path.join(__dirname, 'uploads')));

// Inicio el servidor
app.listen(PORT, () => {
  console.log(path.join(__dirname, 'uploads'));
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
