const StudentModel = require('../models/studentModel'); // Llama al modelo StudentModel
const AssignmentModel = require('../models/assignmentModel'); // Llama al modelo assignmentModel
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

const studentLoginController = async (dni, password, check) => {
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

  const studentExists = await StudentModel.findOne({ dni: newStudent.dni }); // aca me devuelve el estudiante si existe
  if (studentExists) throw new Error('El usuario ya existe');

  //guardao el nuevo estudiante en la DB
  const response = await StudentModel.create(newStudent);
  const student = await StudentModel.findOne({ dni: newStudent.dni });

  return student;
};

const getStudentByIdController = async (id) => {
  const student = await StudentModel.findById(id).populate('assignments');
  if (!student) throw new Error('No existe el estudiante');
  return student;
};

const studentSelectionController = async (id, career, assignments) => {
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { career, assignments },
    { new: true } // Devuelvo el documento actualizado
  );

  // Pusheo el nuevo estudiante al listado de estudiantes de las materias que cursa
  await AssignmentModel.updateMany(
    { _id: { $in: assignments } },
    { $addToSet: { students: { _id: id } } } // Addtoset para que no se repita si ya existe
  );

  if (!student) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }

  return student;
};

module.exports = {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
  getStudentByIdController,
  studentSelectionController,
};
