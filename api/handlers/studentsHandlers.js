const {
  getAllStudentsController,
  studentLoginController
} = require('../controllers/studentsController');

const getAllStudentsHandler = async (req, res) => {
  try {
    const allStudents = await getAllStudentsController();
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
};

module.exports = {
  getAllStudentsHandler,
  studentLoginHandler
};
