const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: [
        'Ingeniería',
        'Derecho',
        'Arquitectura',
        'Medicina',
        'Psicología',
        'Literatura',
        'Biología',
        'Administración de Empresas',
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
