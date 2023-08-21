const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentsSchema = new Schema({
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
  exams: {
    type: [String],
    required: true,
    unique: true,
  },
});

const AssignmentsModel = mongoose.model('Assignment', AssignmentsSchema);
module.exports = AssignmentsModel;
