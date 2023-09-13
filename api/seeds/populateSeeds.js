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
  //Ingenieria
  careers[0].assignments.push(
    assignments[0]._id,
    assignments[1]._id,
    assignments[11]._id,
    assignments[12]._id,
    assignments[13]._id
  );
  //Derecho
  careers[1].assignments.push(
    assignments[2]._id,
    assignments[3]._id,
    assignments[4]._id,
    assignments[5]._id,
    assignments[6]._id
  );
  //Psicologia
  careers[2].assignments.push(
    assignments[6]._id,
    assignments[7]._id,
    assignments[8]._id,
    assignments[9]._id,
    assignments[10]._id
  );
  //Biologia
  careers[3].assignments.push(
    assignments[22]._id,
    assignments[11]._id,
    assignments[24]._id,
    assignments[25]._id,
    assignments[26]._id
  );
  //Medicina
  careers[4].assignments.push(
    assignments[19]._id,
    assignments[20]._id,
    assignments[21]._id,
    assignments[22]._id,
    assignments[23]._id
  );
  //Admin
  careers[5].assignments.push(
    assignments[14]._id,
    assignments[15]._id,
    assignments[16]._id,
    assignments[17]._id,
    assignments[18]._id
  );

  // Insertar Estudiantes en Carreras
  careers[0].students.push(students[0]._id, students[6]._id);
  careers[1].students.push(students[1]._id);
  careers[2].students.push(students[2]._id);
  careers[3].students.push(students[3]._id);
  careers[4].students.push(students[4]._id);
  careers[5].students.push(students[5]._id);

  // Insertar Materias en Estudiantes
  //Ingenieria
  students[0].assignments.push(
    assignments[0]._id,
    assignments[1]._id,
    assignments[11]._id,
    assignments[12]._id,
    assignments[13]._id
  );
  students[6].assignments.push(
    assignments[0]._id,
    assignments[1]._id,
    assignments[11]._id,
    assignments[12]._id,
    assignments[13]._id
  );
  //Derecho
  students[1].assignments.push(
    assignments[2]._id,
    assignments[3]._id,
    assignments[4]._id,
    assignments[5]._id,
    assignments[6]._id
  );
  //Psicologia
  students[2].assignments.push(
    assignments[6]._id,
    assignments[7]._id,
    assignments[8]._id,
    assignments[9]._id,
    assignments[10]._id
  );
  //Biologia
  students[3].assignments.push(
    assignments[22]._id,
    assignments[11]._id,
    assignments[24]._id,
    assignments[25]._id,
    assignments[26]._id
  );
  //Medicina
  students[4].assignments.push(
    assignments[19]._id,
    assignments[20]._id,
    assignments[21]._id,
    assignments[22]._id,
    assignments[23]._id
  );
  //Admin
  students[5].assignments.push(
    assignments[14]._id,
    assignments[15]._id,
    assignments[16]._id,
    assignments[17]._id,
    assignments[18]._id
  );

  // Insertar Materias en Profesores
  teachers[0].assignments.push(
    assignments[0]._id,
    assignments[1]._id,
    assignments[11]._id,
    assignments[12]._id,
    assignments[13]._id
  );
  teachers[1].assignments.push(
    assignments[18]._id,
    assignments[14]._id,
    assignments[2]._id,
    assignments[3]._id,
    assignments[4]._id,
    assignments[5]._id,
    assignments[15]._id,
    assignments[19]._id,
    assignments[6]._id
  );
  teachers[2].assignments.push(
    assignments[6]._id,
    assignments[7]._id,
    assignments[8]._id,
    assignments[9]._id,
    assignments[16]._id,
    assignments[20]._id,
    assignments[10]._id
  );
  teachers[3].assignments.push(
    assignments[22]._id,
    assignments[11]._id,
    assignments[24]._id,
    assignments[21]._id,
    assignments[25]._id,
    assignments[17]._id,
    assignments[26]._id
  );

  // Insertar Estudiantes en Materias
  assignments[0].students.push(students[0]._id, students[6]._id);
  assignments[1].students.push(students[0]._id, students[6]._id);
  assignments[2].students.push(students[1]._id);
  assignments[3].students.push(students[1]._id);
  assignments[4].students.push(students[1]._id);
  assignments[5].students.push(students[1]._id);
  assignments[6].students.push(students[1]._id, students[2]._id);
  assignments[7].students.push(students[2]._id);
  assignments[8].students.push(students[2]._id);
  assignments[9].students.push(students[2]._id);
  assignments[10].students.push(students[2]._id);
  assignments[11].students.push(
    students[0]._id,
    students[6]._id,
    students[3]._id
  );
  assignments[12].students.push(students[0]._id, students[6]._id);
  assignments[13].students.push(students[0]._id, students[6]._id);
  assignments[14].students.push(students[5]._id);
  assignments[15].students.push(students[5]._id);
  assignments[16].students.push(students[5]._id);
  assignments[17].students.push(students[5]._id);
  assignments[18].students.push(students[5]._id);
  assignments[19].students.push(students[4]._id);
  assignments[20].students.push(students[4]._id);
  assignments[21].students.push(students[4]._id);
  assignments[22].students.push(students[3]._id, students[4]._id);
  assignments[23].students.push(students[4]._id);
  assignments[24].students.push(students[3]._id);
  assignments[25].students.push(students[3]._id);
  assignments[26].students.push(students[3]._id);

  //Agrego notas de examenes e inasistencias
  for (let assignment of assignments) {
    assignment.students[0].missedClasses = Math.round(Math.random() * 10); // Inasistencias
    for (let event of assignment.events) {
      if (event.type === 'Entrega') {
        event.eventDetails.push({
          student: assignment.students[0],
          grade: Math.round(Math.random() * 10), // Calificacion
          file: 'TP1.pdf',
          comments: 'Trata de mejorar tu prosa, muchacho.',
        });
      } else {
        event.eventDetails.push({
          student: assignment.students[0],
          grade: Math.round(Math.random() * 10), // Calificacion
        });
      }
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
