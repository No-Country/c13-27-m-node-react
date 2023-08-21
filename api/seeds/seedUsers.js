const mongoose = require('mongoose');
const User = require('../models/usersModels');
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
const newUser = new User({
  firstName: 'Juan',
  lastName: 'Perez',
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
  await User.deleteMany({});
  await newUser.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Database Seeded!');
  mongoose.connection.close();
});
