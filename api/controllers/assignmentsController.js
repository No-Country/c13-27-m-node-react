const AssignmentsModel = require('../models/assignmentsModel'); // Llama al modelo AssignmentModel

const getAllAssignmentsController = async (req, res) => {
  const assignments = await AssignmentsModel.find({}); // Todos las materias de la DB
  if (!assignments) throw new Error('No se pudieron obtener las materias');
  return assignments;
};

const getAssignmentByIdController = async (req, res) => {
  const { id } = req.params;
  const assignment = await AssignmentsModel.findById(id).populate('students');
  if (!assignment) throw new Error('No se pudo encontrar la materia');
  return assignment;
};

module.exports = {
  getAllAssignmentsController,
  getAssignmentByIdController,
};
