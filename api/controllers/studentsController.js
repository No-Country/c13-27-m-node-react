const StudentModel = require('../models/studentModel'); // Llama al modelo StudentModel
const { createHash, validPassword } = require('../utils/hashPassword'); // Llama a la funcion createHash

const getAllStudentsController = async () => {
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage, totalPages } =
    await StudentModel.paginate({}, { page: 1, limit: 10, lean: true });

  if (!docs) throw new Error('No se pudieron obtener los estudiantes');
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
  if (!email || !password || !check) throw new Error('Dato faltante');
  if (check !== 'student') throw new Error('El usuario no es un estudiante');

  const foundStudent = await StudentModel.findOne({ email: email });

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
    !newStudent.dni ||
    !newStudent.dob ||
    !newStudent.address ||
    !newStudent.assignments ||
    !newStudent.career
  )
    throw new Error('Ingrese todos los datos');

  newStudent.password = createHash(newStudent.password); // encripto la contraseña

  const studentExists = await StudentModel.findOne({ email: newStudent.email }); // aca me devuelve el estudiante si existe
  if (studentExists) throw new Error('El usuario ya existe');

  //guardao el nuevo estudiante en la DB
  const response = await StudentModel.create(newStudent);

  return response;
};

module.exports = {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
};
