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

const getEntregasByIdController = async (req, res) => {
  const { id } = req.params;
  const assignment = await AssignmentModel.findById(id).populate('students');
  if (!assignment) throw new Error('No se pudo encontrar la materia');
  const entregas = [];
  for (evento of assignment.events) {
    if (evento.type === 'Entrega') {
      entregas.push(evento);
    }
  }
  console.log(entregas);

  return entregas;
};

const getAssignmentsByCareerController = async (req, res) => {
  const { careerName } = req.params;
  const career = await CareerModel.findOne({ name: careerName }).populate(
    'assignments'
  );
  if (!career) throw new Error('No se encontró la carrera');
  return career.assignment;
};

const updateAssignmentsLinksController = async (id, newLinks) => {
  if (newLinks.length === 0) throw new Error('No se enviaron links');
  await AssignmentModel.updateOne({ _id: id }, { $set: { links: newLinks } });
  const assignment = await AssignmentModel.findOne({ _id: id });
  return assignment;
};

const createCommentController = async (idAssignment, idStudent, comment) => {
  const assignment = await AssignmentModel.findOne({ _id: idAssignment });
  if (!assignment) throw new Error('No se pudo encontrar la materia');
  if (!comment) throw new Error('No se envio ningun comentario');

  for (let event of assignment.events) {
    if (event.type === 'Entrega') {
      if (event.eventDetails[0].student._id.toString() === idStudent) {
        event.eventDetails[0].comments = comment;
        await assignment.save();
      }
    }
  }

  return comment;
};

const getEventsByIdController = async (idAssignment, idStudent) => {
  const assignment = await AssignmentModel.findOne({ _id: idAssignment });
  if (!assignment) throw new Error('No se pudo encontrar la materia');
  let entregas = [];

  for (let event of assignment.events) {
    if (event.type === 'Entrega') {
      if (event.eventDetails[0].student._id.toString() === idStudent) {
        entregas.push(event);
      }
    }
  }

  return entregas;
};

module.exports = {
  getAllAssignmentsController,
  getAssignmentByIdController,
  getAssignmentsByCareerController,
  getEntregasByIdController,
  updateAssignmentsLinksController,
  createCommentController,
  getEventsByIdController,
};
