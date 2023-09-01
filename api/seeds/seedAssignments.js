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
  exams: [
    {
      date: new Date('2023-06-05'),
      time: '10:30 AM',
      duration: 180,
      type: 'Parcial',
    },
    {
      date: new Date('2023-07-05'),
      time: '10:30 AM',
      duration: 180,
      type: 'Parcial',
    },
    {
      date: new Date('2023-10-05'),
      time: '10:30 AM',
      duration: 220,
      type: 'Final',
    },
  ],
  students: [
    //  '64e3ed3b13ce0a444343a978'
  ],
  days: ['Viernes', 'Jueves'],
  schedule: '2:00 PM a 4:00 PM',
  classroom: 'Aula 3F',
});
const newAssignment2 = new Assignment({
  name: 'Física',
  exams: [
    {
      date: new Date('2023-08-01'),
      time: '09:00 AM',
      duration: 90,
      type: 'Parcial',
    },
    {
      date: new Date('2023-09-01'),
      time: '09:00 AM',
      duration: 90,
      type: 'Parcial',
    },
    {
      date: new Date('2023-10-01'),
      time: '09:00 AM',
      duration: 120,
      type: 'Final',
    },
  ],
  students: [
    //  '64e3ed3b13ce0a444343a978'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 9:00 AM',
  classroom: 'Aula 5A',
});
const newAssignment3 = new Assignment({
  name: 'Ciencia Política',
  exams: [
    {
      date: new Date('2023-06-10'),
      time: '02:00 PM',
      duration: 90,
      type: 'Parcial',
    },
    {
      date: new Date('2023-08-25'),
      time: '02:00 PM',
      duration: 90,
      type: 'Parcial',
    },
    {
      date: new Date('2023-09-15'),
      time: '02:00 PM',
      duration: 130,
      type: 'Final',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '10:00 AM a 12:00 AM',
  classroom: 'Aula 4E',
});
const newAssignment4 = new Assignment({
  name: 'Derecho Penal',
  exams: [
    {
      date: new Date('2023-05-05'),
      time: '10:30 AM',
      duration: 120,
      type: 'Parcial',
    },
    {
      date: new Date('2023-08-23'),
      time: '10:30 AM',
      duration: 120,
      type: 'Parcial',
    },
    {
      date: new Date('2023-10-15'),
      time: '10:30 AM',
      duration: 180,
      type: 'Final',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
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
