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

const studentLoginController = async (email, password, check) => {
  if (!email || !password || !check) throw new Error('Dato faltante');
  if (check !== 'student') throw new Error('El usuario no es un estudiante');

  const foundStudent = await StudentModel.findOne({
    email: email,
    password: password,
  });

  if(!foundStudent) throw new Error('Los datos ingresados son erróneos');

  return foundStudent;
};

module.exports = {
  getAllStudentsController,
  studentLoginController,
};
