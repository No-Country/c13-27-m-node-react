const StudentModel = require('../models/studentModel'); // Llama al modelo StudentModel
const { createHash } = require('../utils/hashPassword'); // Llama a la funcion createHash

const getAllStudentsController = async (req, res) => {
  const students = await StudentModel.find({}); // Todos los resultados de la DB
  if (!students) throw new Error('No se pudieron obtener los usuarios');
  return students;
};

const registerStudentController = async (req, res) => {
  const {
    firstName,
    lastName,
    password,
    email,
    dni,
    dob,
    address,
    assignments,
    career,
  } = req.body;

  // valido que esten ingresados todos los datos
  if (
    !firstName ||
    !lastName ||
    !password ||
    !email ||
    !dni ||
    !dob ||
    !address ||
    !assignments ||
    !career
  )
    throw new Error('Ingrese todos los datos');

  const studentExists = await StudentModel.findOne({ email: email }); // aca me devuelve el estudiante si existe

  if (studentExists) throw new Error('El usuario ya existe');

  //guardao el nuevo estudiante en la DB
  const response = await StudentModel.create({
    firstName,
    lastName,
    password: createHash(password),
    email,
    dni,
    dob,
    address,
    assignments,
    career,
  });

  return response;
};

module.exports = {
  getAllStudentsController,
  registerStudentController,
};
