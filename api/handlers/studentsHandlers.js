const getAllStudentsController = require('../controllers/studentsController');

const getAllStudentsHandler = async (req, res) => {
  try {
    const allStudents = await getAllStudentsController();
    res.send(allStudents);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAllStudentsHandler;
