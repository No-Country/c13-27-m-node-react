const mongoose = require('mongoose');
const Assignment = require('../models/assignmentsModels');
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
});
const newAssignment2 = new Assignment({
  name: 'Física',
  exams: ['Aceleración', 'Velocidad', 'Fuerza'],
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
