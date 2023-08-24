const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

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

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

// Inicio el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
