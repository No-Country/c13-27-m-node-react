const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  teachers: {
    type: Schema.Types.ObjectId, //Conecta con modelo Teacher
    ref: 'Teacher',
  },
  students: [
    {
      type: Schema.Types.ObjectId, //Conecta con modelo Student
      ref: 'Student',
    },
  ],
  exams: [
    new Schema({
      date: Date,
      time: String,
      duration: Number,
      type: {
        type: String,
        enum: ['Parcial', 'Final'],
      },
    }),
  ],
  days: {
    type: [String],
  },
  schedule: {
    type: String,
  },
  classroom: {
    type: String,
  },
});

const AssignmentModel = mongoose.model('Assignment', AssignmentSchema);
module.exports = AssignmentModel;

/* modelo carrera: nombre materia alumnos cuales carreras hay: (ENUM) 4 carreras */
