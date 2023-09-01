const {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
  getStudentByIdController,
  studentSelectionController,
} = require('../controllers/studentsController');

const {
  loginSchema,
  registrySchema,
} = require('../utils/validations/usersValidations');

const getAllStudentsHandler = async (req, res) => {
  let { page, limit } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  try {
    const response = await getAllStudentsController(page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const studentLoginHandler = async (req, res) => {
  const { dni, password, check } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) throw new Error(error);
  try {
    const login = await studentLoginController(dni, password, check);
    req.session.user = {
      dni,
      role: check,
    }; // guardo el usuario logueado en la sesion
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerStudentHandler = async (req, res) => {
  const { firstName, lastName, password, email, dni } = req.body;
  const { error } = registrySchema.validate(req.body);
  if (error) throw new Error(error);
  const newStudent = {
    firstName,
    lastName,
    password,
    email,
    dni,
  };
  try {
    const response = await registerStudentController(newStudent);
    //valido que el estudiante se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getStudentByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await getStudentByIdController(id);
    const grades = student.getExamsGrades();
    res.send({ student, grades });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const studentSelectionHandler = async (req, res) => {
  const { id } = req.params;
  const { career, assignments } = req.body;

  try {
    const response = await studentSelectionController(id, career, assignments);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.mesage);
  }
};

module.exports = {
  getAllStudentsHandler,
  studentLoginHandler,
  registerStudentHandler,
  getStudentByIdHandler,
  studentSelectionHandler,
};
