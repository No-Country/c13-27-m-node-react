const express = require('express');
const router = express.Router();

// Importo los handlers de materias
const {
  getAllAssignmentsHandler,
  getAssignmentByIdHandler,
  getAssignmentsByCareerHandler,
  getEntregasByIdHandler,
  updateAssignmentsLinksHandler,
  createCommentHandler,
  getEventsByIdHandler,
} = require('../handlers/assignmentsHandlers');

router.get('/allAssignments', getAllAssignmentsHandler); // Ruta para obtener todos las materias (ver como integrar con alumnos y profesores)
router.get('/:id', getAssignmentByIdHandler); // Ruta para obtener una materia usando el ID
router.get('/:id/entregas', getEntregasByIdHandler); // Ruta para obtener una materia usando el ID
router.get('/careers/:careerName/assignments', getAssignmentsByCareerHandler);
router.put('/:id/uploadLinks', updateAssignmentsLinksHandler);
router.post('/:id/comments/:fileName', createCommentHandler);
router.get('/:aid/events/:sid', getEventsByIdHandler);

module.exports = router;
