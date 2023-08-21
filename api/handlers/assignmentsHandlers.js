const {
  getAllAssignmentsController,
  getAssignmentByIdController,
} = require('../controllers/assignmentsController');

const getAllAssignmentsHandler = async (req, res) => {
  try {
    const allAssignments = await getAllAssignmentsController();
    res.send(allAssignments);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAssignmentByIdHandler = async (req, res) => {
  try {
    const assignment = await getAssignmentByIdController(req);
    res.send(assignment);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllAssignmentsHandler, getAssignmentByIdHandler };
