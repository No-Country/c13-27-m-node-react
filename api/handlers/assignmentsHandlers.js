const {
  getAllAssignmentsController,
  getAssignmentByIdController,
  getAssignmentsByCareerController,
  updateAssignmentsLinksController,
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

const getAssignmentsByCareerHandler = async (req, res) => {
  try {
    const assignments = await getAssignmentsByCareerController();
    return res.status(200).json(assignments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAssignmentsLinksHandler = async (req, res) => {
  const { id } = req.params;
  const { links } = req.body;
  try {
    const assignments = await updateAssignmentsLinksController(id, links);
    res.send(assignments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAssignmentsHandler,
  getAssignmentByIdHandler,
  getAssignmentsByCareerHandler,
  updateAssignmentsLinksHandler,
};
