const mongoose = require('mongoose');
const Assignment = require('../models/assignmentModel');
const Career = require('../models/careerModel');
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');

require('dotenv').config(); //Variables de entorno para MongoDB

//Conexion a DB
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/educapp';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Base de datos conectada');
});

const populateDB = async () => {
  // Levanto todas las DB
  const careers = await Career.find({});
  const assignments = await Assignment.find({});
  const students = await Student.find({});
  const teachers = await Teacher.find({});

  // Insertar Materias en Carreras
  careers[0].assignments.push(assignments[0]._id, assignments[1]._id);
  careers[1].assignments.push(assignments[2]._id, assignments[3]._id);
  // Insertar Estudiantes en Carreras
  careers[0].students.push(students[0]._id);
  careers[1].students.push(students[1]._id);
  // Insertar Materias en Estudiantes
  students[0].assignments.push(assignments[0]._id, assignments[1]._id);
  students[1].assignments.push(assignments[2]._id, assignments[3]._id);
  // Insertar Materias en Profesores
  teachers[0].assignments.push(assignments[0]._id, assignments[1]._id);
  // Insertar Estudiantes en Materias
  assignments[0].students.push(students[0]._id);
  assignments[1].students.push(students[0]._id);
  assignments[2].students.push(students[1]._id);
  assignments[3].students.push(students[1]._id);

  //Agrego notas de examenes e inasistencias
  for (let assignment of assignments) {
    assignment.students[0].missedClasses = Math.round(Math.random() * 10);
    for (let exam of assignment.exams) {
      exam.grades.push({
        student: assignment.students[0],
        grade: Math.round(Math.random() * 10),
      });
    }
  }

  // Guardo todas las DB
  for (const career of careers) {
    await career.save();
  }
  for (const assignment of assignments) {
    await assignment.save();
  }
  for (const student of students) {
    await student.save();
  }
  for (const teacher of teachers) {
    await teacher.save();
  }
};

//Run the populate function, then close after done
populateDB().then(() => {
  console.log('Modelos populados');
  mongoose.connection.close();
});
