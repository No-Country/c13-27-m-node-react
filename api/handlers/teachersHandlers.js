const {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
  getTeacherByIdController,
} = require('../controllers/teachersController');

const getAllTeachersHandler = async (req, res) => {
  let { page, limit } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  try {
    const response = await getAllTeachersController(page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const teacherLoginHandler = async (req, res) => {
  const { dni, password, check } = req.body;
  try {
    const login = await teacherLoginController(dni, password, check);
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerTeacherHandler = async (req, res) => {
  const { firstName, lastName, password, email, dni } = req.body;

  const newTeacher = {
    firstName,
    lastName,
    password,
    email,
    dni,
  };
  try {
    const response = await registerTeacherController(newTeacher);
    //valido que el profesor se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.json('Usted se registró correctamente');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getTeacherByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await getTeacherByIdController(id);
    res.send(teacher);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
  getTeacherByIdHandler,
};
