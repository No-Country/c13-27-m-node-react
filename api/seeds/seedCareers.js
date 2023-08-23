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
  students: ['64e658c0c2088908dd408c50'],
  assignments: [
    '64e3ee47f320e0e862986c40', // Matematica
    '64e3ee47f320e0e862986c41', // Fisica
  ],
});
const newCareer2 = new Career({
  name: 'Derecho',
  students: ['64e658c0c2088908dd408c51'],
  assignments: [
    '64e657d99817b684985962bb', // Ciencia Política
    '64e657d99817b684985962bc', // Derecho Penal
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
