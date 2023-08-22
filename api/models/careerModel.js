const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  typeOfCareer: {
    type: ENUM('psychology', 'architecture', 'music', 'software engineering'),
    required: true,
    unique: true,
  },
});

const CareerModel = mongoose.model('Career', CareerSchema);
module.exports = CareerModel;

/* modelo carrera: nombre materia alumnos cuales carreras hay: (ENUM) 4 carreras */