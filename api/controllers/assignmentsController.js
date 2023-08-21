const AssignmentsModel = require('../models/assignmentsModel'); // Llama al modelo AssignmentModel

const getAllAssignmentsController = async (req, res) => {
  const assignments = await AssignmentsModel.find({}); // Todos las materias de la DB
  if (!assignments) throw new Error('No se pudieron obtener las materias');
  return assignments;
};

module.exports = getAllAssignmentsController;
