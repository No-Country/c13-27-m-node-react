const express = require('express');
const app = express();

// Importo el índex de rutas
const routes = require('./routes/index');

// Traigo variables de entorno
require('dotenv').config();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use('/', routes);

// Inicio el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
