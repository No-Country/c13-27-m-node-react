const mongoose = require('mongoose');
const Assignment = require('../models/assignmentModel');
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
const newAssignment3 = new Assignment({
  name: 'Ciencia Política',
  exams: [
    'Teoría Política',
    'Sistema Política Nacional',
    'Instituciones Políticas y Actores',
  ],
  students: ['64e658c0c2088908dd408c51'],
});
const newAssignment4 = new Assignment({
  name: 'Derecho Penal',
  exams: [
    'Administración de la Justicia',
    'Desalojos Forzosos',
    'Estado de Derecho',
  ],
  students: ['64e658c0c2088908dd408c51'],
});

const seedDB = async () => {
  // Limpiar DB primero
  await Assignment.deleteMany({});
  // Popular la DB
  await newAssignment.save();
  await newAssignment2.save();
  await newAssignment3.save();
  await newAssignment4.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Materias creadas en la DB');
  mongoose.connection.close();
});
