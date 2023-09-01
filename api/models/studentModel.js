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

StudentSchema.plugin(mongoosePaginate);

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;
