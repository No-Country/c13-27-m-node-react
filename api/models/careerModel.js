const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: [
        'Física',
        'Matemática',
        'Ingeniería',
        'Derecho',
        'Arquitectura',
        'Medicina',
      ],
      message: 'No existe la carrera {VALUE}',
    },
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Assignment',
    },
  ],
});

const CareerModel = mongoose.model('Career', CareerSchema);
module.exports = CareerModel;

/* modelo carrera: nombre materia alumnos cuales carreras hay: (ENUM) 4 carreras */
