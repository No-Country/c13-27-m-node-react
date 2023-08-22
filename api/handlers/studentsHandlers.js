const {
  getAllStudentsController,
  studentLoginController,
  registerStudentController,
} = require('../controllers/studentsController');

const getAllStudentsHandler = async (req, res) => {
  try {
    const allStudents = await getAllStudentsController(req, res);
    res.send(allStudents);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


const studentLoginHandler = async (req, res) => {
  const {email, password, check} = req.body;
  try {
    const login = await studentLoginController(email, password, check);
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const registerStudentHandler = async (req, res) => {
  try {
    const response = await registerStudentController(req, res);
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
  registerStudentHandler
};
