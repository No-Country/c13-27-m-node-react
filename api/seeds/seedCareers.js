const mongoose = require('mongoose');
const Career = require('../models/careerModel');
require('dotenv').config(); //Variables de entorno para MongoDB

//Conexion a DB
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

// Crea una nueva carrera
const newCareer = new Career({
  name: 'Ingeniería',
  students: [
    //  '64e658c0c2088908dd408c50'
  ],
  assignments: [
    // '64ec91d777d39c4e638bc230', // Matematica
    // '64ec91d777d39c4e638bc232', // Fisica
  ],
});
const newCareer2 = new Career({
  name: 'Derecho',
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  assignments: [
    // '64ec91d777d39c4e638bc234', // Ciencia Política
    //'64ec91d777d39c4e638bc236', // Derecho Penal
  ],
});

const seedDB = async () => {
  // Limpiar DB primero
  await Career.deleteMany({});
  // Popular la DB
  await newCareer.save();
  await newCareer2.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Carreras creadas en la DB');
  mongoose.connection.close();
});
