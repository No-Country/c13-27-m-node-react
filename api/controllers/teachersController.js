const TeacherModel = require('../models/teacherModel'); // Llama al modelo TeacherModel
const { createHash, validPassword } = require('../utils/hashPassword'); // Llama a la funcion createHash

const getAllTeachersController = async (page, limit) => {
  page = page || 1;
  limit = limit || 10;
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage, totalPages } =
    await TeacherModel.paginate({}, { page: page, limit: limit, lean: true });

  if (docs.length === 0)
    throw new Error('No hay mas profesores para esta pagina.');

  return {
    teachers: docs,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
    totalPages,
  };
};

const teacherLoginController = async (dni, password, check) => {
  if (!dni || !password || !check) throw new Error('Dato faltante');
  if (check !== 'teacher') throw new Error('El usuario no es un profesor');

  const foundTeacher = await TeacherModel.findOne({ dni: dni });

  if (!foundTeacher) throw new Error('Usuario incorrecto');

  if (!validPassword(foundTeacher, password))
    throw new Error('Contraseña incorrecta');

  return foundTeacher;
};

const registerTeacherController = async (newTeacher) => {
  // valido que esten ingresados todos los datos
  if (
    !newTeacher.firstName ||
    !newTeacher.lastName ||
    !newTeacher.password ||
    !newTeacher.email ||
    !newTeacher.dni
  )
    throw new Error('Ingrese todos los datos');

  newTeacher.password = createHash(newTeacher.password); // encripto la contraseña

  const teacherExists = await TeacherModel.findOne({ dni: newTeacher.dni }); // aca me devuelve el profesor si existe
  if (teacherExists) throw new Error('El usuario ya existe');

  //guardo el nuevo profesor en la DB
  const response = await TeacherModel.create(newTeacher);

  return response;
};

const getTeacherById = async () => {
  const { id } = req.params;
  try {
    const teacher = await TeacherModel.findById(id);
    if (!teacher) throw new Error('No hay información disponible');
    
    res.send(teacher);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
  getTeacherById
};
