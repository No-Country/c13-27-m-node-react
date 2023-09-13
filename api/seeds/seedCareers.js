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
  students: [],
  assignments: [],
});
const newCareer1 = new Career({
  name: 'Derecho',
  students: [],
  assignments: [],
});
const newCareer2 = new Career({
  name: 'Psicología',
  students: [],
  assignments: [],
});
const newCareer3 = new Career({
  name: 'Biología',
  students: [],
  assignments: [],
});
const newCareer4 = new Career({
  name: 'Medicina',
  students: [],
  assignments: [],
});
const newCareer5 = new Career({
  name: 'Administración de Empresas',
  students: [],
  assignments: [],
});

const seedDB = async () => {
  // Limpiar DB primero
  await Career.deleteMany({});
  // Popular la DB
  await newCareer.save();
  await newCareer1.save();
  await newCareer2.save();
  await newCareer3.save();
  await newCareer4.save();
  await newCareer5.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Carreras creadas en la DB');
  mongoose.connection.close();
});
