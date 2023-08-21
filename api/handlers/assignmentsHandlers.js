const getAllAssignmentsController = require('../controllers/assignmentsController');

const getAllAssignmentsHandler = async (req, res) => {
  try {
    const allAssignments = await getAllAssignmentsController();
    res.send(allAssignments);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAllAssignmentsHandler;
