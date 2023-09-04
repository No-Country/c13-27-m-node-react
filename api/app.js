const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');

// Configuración de cors
// Configura una lista blanca de URLs permitidas
const whitelist = ['https://educapp-server-80o9.onrender.com'];

const corsOptions = {
  origin: function (origin, callback) {
    // Verifica si la URL de origen está en la lista blanca
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido por CORS'));
    }
  },
};

// Aplica el middleware CORS con las opciones personalizadas
app.use(cors(corsOptions));

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

// Inicio el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
