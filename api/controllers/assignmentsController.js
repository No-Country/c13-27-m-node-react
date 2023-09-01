const AssignmentModel = require('../models/assignmentModel'); // Llama al modelo AssignmentModel
const CareerModel = require('../models/careerModel');

const getAllAssignmentsController = async (req, res) => {
  const assignments = await AssignmentModel.find({}); // Todos las materias de la DB
  if (!assignments) throw new Error('No se pudieron obtener las materias');
  return assignments;
};

const getAssignmentByIdController = async (req, res) => {
  const { id } = req.params;
  const assignment = await AssignmentModel.findById(id).populate('students');
  if (!assignment) throw new Error('No se pudo encontrar la materia');
  return assignment;
};

const getAssignmentsByCareerController = async (req, res) => {
  const { careerName } = req.params;
  const career = await CareerModel.findOne({ name: careerName }).populate(
    'assignments'
  );
  if (!career) throw new Error('No se encontró la carrera');
  return career.assignment;
};

module.exports = {
  getAllAssignmentsController,
  getAssignmentByIdController,
  getAssignmentsByCareerController,
};
