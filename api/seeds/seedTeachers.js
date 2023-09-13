const mongoose = require('mongoose');
const Teacher = require('../models/teacherModel');
const { createHash } = require('../utils/hashPassword');

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
  password: createHash('123456'),
  email: 'batista@hotmail.com',
  dni: '25000000',
  dob: 10 / 12 / 1970,
  address: 'Salta 123',
  assignments: [],
});
const newTeacher1 = new Teacher({
  firstName: 'Alberto',
  lastName: 'Einstenio',
  password: createHash('123456'),
  email: 'einstenio@hotmail.com',
  dni: '15000000',
  dob: 10 / 12 / 1973,
  address: 'Perú 456',
  assignments: [],
});
const newTeacher2 = new Teacher({
  firstName: 'Miguel',
  lastName: 'Jimenez',
  password: createHash('123456'),
  email: 'mjimenez@gmail.com',
  dni: '26000000',
  dob: 11 / 11 / 1960,
  address: 'Acoyte 798',
  assignments: [],
});
const newTeacher3 = new Teacher({
  firstName: 'Antonio',
  lastName: 'Gramsci',
  password: createHash('123456'),
  email: 'italialibera@gmail.com',
  dni: '28000000',
  dob: 10 / 5 / 1935,
  address: 'Roma 1234',
  assignments: [],
});

const seedDB = async () => {
  //Limpia la DB
  await Teacher.deleteMany({});
  // Guarda el profesor
  await newTeacher.save();
  await newTeacher1.save();
  await newTeacher2.save();
  await newTeacher3.save();
};

//Llena la DB, cierra conexión
seedDB().then(() => {
  console.log('Profesores creados en la DB');
  mongoose.connection.close();
});
