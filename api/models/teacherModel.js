const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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
    type: Number,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  assignments: [
    {
      type: Schema.Types.ObjectId, //Conecta con modelo Assignments
      ref: 'Assignments',
    },
  ],
});

TeacherModel.plugin(mongoosePaginate);

const TeacherModel = mongoose.model('Teachers', TeacherSchema);
module.exports = TeacherModel;
