const StudentModel = require('../models/studentModel'); // Llama al modelo StudentModel

// function getAllUsersController() {
//   const message = 'Este es un mensaje de prueba al obtener todos los usuarios';
//   return message;
// }

const getAllStudentsController = async (req, res) => {
  const students = await StudentModel.find({}); // Todos los resultados de la DB
  if (!students) throw new Error('No se pudieron obtener los usuarios');
  return students;
};

const studentLoginController = async (req, res) => {
  return;
}

module.exports = {
  getAllStudentsController,
  studentLoginController
};
