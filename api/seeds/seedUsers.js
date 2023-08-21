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
  console.log('Database Connected!');
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
  assignments: ['Matemática', 'Física'],
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
  console.log('Database Seeded!');
  mongoose.connection.close();
});
