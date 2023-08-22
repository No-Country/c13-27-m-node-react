const mongoose = require('mongoose');
const Teacher = require('../models/teacherModel');
require('dotenv').config(); //Variables de entorno para MongoDB

//Conexión a DB
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

// Crea un nuevo profesor usando el modelo
const newTeacher = new Teacher({
  firstName: 'Ernesto',
  lastName: 'Batista',
  password: '123456',
  email: 'batista@hotmail.com',
  dni: 25000000,
  dob: 10 / 12 / 1970,
  address: 'Salta 123',
  assignments: ['Matemática', 'Física'],
});

const seedDB = async () => {
  //Limpia la DB
  await Teacher.deleteMany({});
  // Guarda el profesor
  await newTeacher.save();
};

//Llena la DB, cierra conexión
seedDB().then(() => {
  console.log('Base de datos cargada correctamente');
  mongoose.connection.close();
});
