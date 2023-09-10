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
// Matemática
const newAssignment = new Assignment({
  name: 'Matemática',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e3ed3b13ce0a444343a978'
  ],
  days: ['Viernes', 'Jueves'],
  schedule: '2:00 PM a 4:00 PM',
  classroom: 'Aula 3F',
});
// Física
const newAssignment2 = new Assignment({
  name: 'Física',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 9:00 AM',
  classroom: 'Aula 5A',
});
// Ciencia Politica
const newAssignment3 = new Assignment({
  name: 'Ciencia Política',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '10:00 AM a 12:00 AM',
  classroom: 'Aula 4E',
});
// Derecho Penal
const newAssignment4 = new Assignment({
  name: 'Derecho Penal',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});

// Derecho Civil
const newAssignment5 = new Assignment({
  name: 'Derecho Civil',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '10:00 AM a 11:00 AM',
  classroom: 'Aula 3G',
});

// Historia
const newAssignment6 = new Assignment({
  name: 'Historia',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '9:30 AM a 11:30 AM',
  classroom: 'Aula 5F',
});
// Filosofía
const newAssignment7 = new Assignment({
  name: 'Filosofía',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 31G',
});

// Sociología
const newAssignment8 = new Assignment({
  name: 'Sociología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Martes', 'Miércoles'],
  schedule: '11:00 AM a 12:00 AM',
  classroom: 'Aula 2E',
});
// Psicoanálisis
const newAssignment9 = new Assignment({
  name: 'Psicoanálisis',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Miércoles', 'Viernes'],
  schedule: '10:00 AM a 11:00 AM',
  classroom: 'Aula 3G',
});
// Neuropsicología
const newAssignment10 = new Assignment({
  name: 'Neuropsicología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Pedagogía
const newAssignment11 = new Assignment({
  name: 'Pedagogía',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Química
const newAssignment12 = new Assignment({
  name: 'Química',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Jueves'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Álgebra
const newAssignment13 = new Assignment({
  name: 'Álgebra',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Geometría
const newAssignment14 = new Assignment({
  name: 'Geometría',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Economía
const newAssignment15 = new Assignment({
  name: 'Economía',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Marketing
const newAssignment16 = new Assignment({
  name: 'Marketing',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Gestión
const newAssignment17 = new Assignment({
  name: 'Gestión',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Miércoles', 'Jueves'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Contabilidad
const newAssignment18 = new Assignment({
  name: 'Contabilidad',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Recursos Humanos
const newAssignment19 = new Assignment({
  name: 'Recusos Humanos',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Anatomía
const newAssignment20 = new Assignment({
  name: 'Anatomía',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Farmacología
const newAssignment21 = new Assignment({
  name: 'Farmacología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Bioquímica
const newAssignment22 = new Assignment({
  name: 'Bioquímica',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '10:00 AM a 12:00 AM',
  classroom: 'Aula 3G',
});
// Microbiología
const newAssignment23 = new Assignment({
  name: 'Microbiología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Jueves'],
  schedule: '12:00 AM a 02:00 PM',
  classroom: 'Aula 3G',
});
// Epidemiología
const newAssignment24 = new Assignment({
  name: 'Epidemiología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles', 'Viernes'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});

// Genética
const newAssignment25 = new Assignment({
  name: 'Genética',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Zoología
const newAssignment26 = new Assignment({
  name: 'Zoología',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Lunes', 'Miércoles'],
  schedule: '8:00 AM a 10:00 AM',
  classroom: 'Aula 3G',
});
// Botánica
const newAssignment27 = new Assignment({
  name: 'Botánica',
  events: [
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
    {
      date: new Date('2023-07-19'),
      type: 'Entrega',
    },
    {
      date: new Date('2023-08-15'),
      type: 'Entrega',
    },
  ],
  students: [
    //  '64e658c0c2088908dd408c51'
  ],
  days: ['Martes', 'Jueves'],
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
  await newAssignment5.save();
  await newAssignment6.save();
  await newAssignment7.save();
  await newAssignment8.save();
  await newAssignment9.save();
  await newAssignment10.save();
  await newAssignment11.save();
  await newAssignment12.save();
  await newAssignment13.save();
  await newAssignment14.save();
  await newAssignment15.save();
  await newAssignment16.save();
  await newAssignment17.save();
  await newAssignment18.save();
  await newAssignment19.save();
  await newAssignment20.save();
  await newAssignment21.save();
  await newAssignment22.save();
  await newAssignment23.save();
  await newAssignment24.save();
  await newAssignment25.save();
  await newAssignment26.save();
  await newAssignment27.save();
};

//Run the seed function, then close after done
seedDB().then(() => {
  console.log('Materias creadas en la DB');
  mongoose.connection.close();
});
