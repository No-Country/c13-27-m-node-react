const StudentModel = require('../models/studentModel'); // Llama al modelo StudentModel
const { createHash, validPassword } = require('../utils/hashPassword'); // Llama a la funcion createHash

const getAllStudentsController = async (page, limit) => {
  page = page || 1;
  limit = limit || 10;
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage, totalPages } =
    await StudentModel.paginate({}, { page: page, limit: limit, lean: true });

  if (docs.length === 0)
    throw new Error('No hay mas estudiantes para esta pagina.');

  return {
    students: docs,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
    totalPages,
  };
};

const studentLoginController = async (email, password, check) => {
  if (!dni || !password || !check) throw new Error('Dato faltante');
  if (check !== 'student') throw new Error('El usuario no es un estudiante');

  const foundStudent = await StudentModel.findOne({ dni: dni });

  if (!foundStudent) throw new Error('Usuario incorrecto');

  if (!validPassword(foundStudent, password))
    throw new Error('Contraseña incorrecta');

  return foundStudent;
};
const registerStudentController = async (newStudent) => {
  // valido que esten ingresados todos los datos
  if (
    !newStudent.firstName ||
    !newStudent.lastName ||
    !newStudent.password ||
    !newStudent.email ||
    !newStudent.dni 
  )
    throw new Error('Ingrese todos los datos');

  newStudent.password = createHash(newStudent.password); // encripto la contraseña

  const studentExists = await StudentModel.findOne({ email: newStudent.email }); // aca me devuelve el estudiante si existe
  if (studentExists) throw new Error('El usuario ya existe');

  //guardao el nuevo estudiante en la DB
  const response = await StudentModel.create(newStudent);

  return response;
};

const getStudentByIdController = async (id) => {
  const student = await StudentModel.findById(id).populate('assignments');
  if (!student) throw new Error('No existe el estudiante');
  return student;
};

module.exports = {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
  getStudentByIdController,
};
