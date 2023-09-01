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
      grades: [
        {
          student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
          },
          grade: Number, // or any data structure for grades
        },
      ],
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

AssignmentSchema.methods.getTotalClasses = function () {
  return this.days.length * 4 * 4; // Clases x 4 semanas   x 4 meses
};

const AssignmentModel = mongoose.model('Assignment', AssignmentSchema);
module.exports = AssignmentModel;
