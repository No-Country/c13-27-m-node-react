const {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
} = require('../controllers/studentsController');

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
  const { email, password, check } = req.body;
  try {
    const login = await studentLoginController(email, password, check);
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerStudentHandler = async (req, res) => {
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

  const newStudent = {
    firstName,
    lastName,
    password,
    email,
    dni,
    dob,
    address,
    assignments,
    career,
  };
  try {
    const response = await registerStudentController(newStudent);
    //valido que el estudiante se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.send('Usted se registró correctamente');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllStudentsHandler,
  studentLoginHandler,
  registerStudentHandler,
};
