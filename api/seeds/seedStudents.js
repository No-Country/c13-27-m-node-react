const mongoose = require('mongoose');
const Student = require('../models/studentModel');
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
  password: '123456',
  email: 'juanperez@hotmail.com',
  dni: 35000000,
  dob: 10 / 12 / 1990,
  address: 'Jujuy 1234',
  assignments: [
    '64e3ee47f320e0e862986c40', // Matematica
    '64e3ee47f320e0e862986c41', // Fisica
  ],
  career: 'Ingeniería',
});

// Manipulate DB
const seedDB = async () => {
  //Clear out the DB
  await Student.deleteMany({});
  await newStudent.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Estudiantes creados en la DB');
  mongoose.connection.close();
});
