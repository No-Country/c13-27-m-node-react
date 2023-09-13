const mongoose = require('mongoose');
const Student = require('../models/studentModel');
const { createHash } = require('../utils/hashPassword');

require('dotenv').config(); //Variables de entorno para MongoDB

//Connect to mongoose
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);

//Connect to Database, log if error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

// Create a new User through the model
const newStudent = new Student({
  firstName: 'Juan',
  lastName: 'Perez',
  password: createHash('123456'),
  email: 'juanperez@hotmail.com',
  dni: '35000000',
  dob: 10 / 12 / 1990,
  address: 'Jujuy 1234',
  assignments: [],
  career: 'Ingeniería',
});
const newStudent1 = new Student({
  firstName: 'Michael',
  lastName: 'Jackson Peralta',
  password: createHash('999999'),
  email: 'mjperalta@hotmail.com',
  dni: '37000000',
  dob: 8 / 2 / 1998,
  address: 'Salta 123',
  assignments: [],
  career: 'Derecho',
});
const newStudent2 = new Student({
  firstName: 'Al',
  lastName: 'Pacino Gutierrez',
  password: createHash('999999'),
  email: 'pachi@hotmail.com',
  dni: '31000000',
  dob: 8 / 2 / 1978,
  address: 'Miranda 123',
  assignments: [],
  career: 'Psicología',
});
const newStudent3 = new Student({
  firstName: 'Trevor',
  lastName: 'Reguito',
  password: createHash('999999'),
  email: 'borre@gmail.com',
  dni: '39000000',
  dob: 8 / 2 / 1988,
  address: 'Rivadavia 1',
  assignments: [],
  career: 'Biología',
});
const newStudent4 = new Student({
  firstName: 'Logan',
  lastName: 'Lobizón',
  password: createHash('999999'),
  email: 'wolf@hotmail.com',
  dni: '34000000',
  dob: 8 / 11 / 1994,
  address: 'Nogoyá 500',
  assignments: [],
  career: 'Medicina',
});
const newStudent5 = new Student({
  firstName: 'Mauro',
  lastName: 'Casas',
  password: createHash('999999'),
  email: 'wmcasas@hotmail.com',
  dni: '24000000',
  dob: 8 / 11 / 1999,
  address: 'Suipacha 666',
  assignments: [],
  career: 'Administración de Empresas',
});
const newStudent6 = new Student({
  firstName: 'Felipe',
  lastName: 'Ramirez',
  password: createHash('999999'),
  email: 'felipinho@hotmail.com',
  dni: '29000000',
  dob: 8 / 11 / 1999,
  address: 'Suipacha 665',
  assignments: [],
  career: 'Ingeniería',
});

// Manipulate DB
const seedDB = async () => {
  //Clear out the DB
  await Student.deleteMany({});
  await newStudent.save();
  await newStudent1.save();
  await newStudent2.save();
  await newStudent3.save();
  await newStudent4.save();
  await newStudent5.save();
  await newStudent6.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Estudiantes creados en la DB');
  mongoose.connection.close();
});
