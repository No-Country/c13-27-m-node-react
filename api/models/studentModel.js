const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Assignment',
      // required: true,
    },
  ],
  career: {
    type: String,
    // required: true,
  },
});

// Método para obtener todos los eventos del estudiante
StudentSchema.methods.getGradesAndAttendance = function () {
  const studentId = this._id;
  const assignmentsData = [];

  for (let assignment of this.assignments) {
    let assignmentToPush = {
      name: assignment.name,
      totalClasses: assignment.days.length * 4 * 4,
      missedClasses: assignment.students.find((student) =>
        student.equals(studentId)
      ).missedClasses,
      events: [],
    };
    for (let event of assignment.events) {
      for (let eventsCompleted of event.eventDetails) {
        if (studentId.equals(eventsCompleted.student)) {
          if (event.type === 'Entrega') {
            assignmentToPush.events.push({
              eventType: event.type,
              grade: eventsCompleted.grade,
              file: eventsCompleted.file || '',
              comments: eventsCompleted.comments || '',
            });
          } else {
            assignmentToPush.events.push({
              eventType: event.type,
              grade: eventsCompleted.grade,
            });
          }
        }
      }
    }

    assignmentsData.push(assignmentToPush);
  }
  return assignmentsData;
};

StudentSchema.plugin(mongoosePaginate);

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;
