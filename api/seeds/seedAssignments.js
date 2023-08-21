const mongoose = require('mongoose');
const Assignment = require('../models/assignmentsModel');
require('dotenv').config(); //Variables de entorno para MongoDB

//Conexion a DB
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

// Crea una nueva materia
const newAssignment = new Assignment({
  name: 'Matemática',
  exams: ['Algoritmos', 'Integrales', 'Funciones'],
  students: ['64e3ed3b13ce0a444343a978'],
});
const newAssignment2 = new Assignment({
  name: 'Física',
  exams: ['Aceleración', 'Velocidad', 'Fuerza'],
  students: ['64e3ed3b13ce0a444343a978'],
});

const seedDB = async () => {
  // Limpiar DB primero
  await Assignment.deleteMany({});
  // Popular la DB
  await newAssignment.save();
  await newAssignment2.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Materias creadas en la DB');
  mongoose.connection.close();
});
