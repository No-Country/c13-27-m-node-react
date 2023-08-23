const express = require('express');
const router = express.Router();

// Importo los handlers de carreras
const {
  getAllCareersHandler,
  getCareersByIdHandler,
} = require('../handlers/careersHandlers');

router.get('/allCareers', getAllCareersHandler); // Ruta para obtener todos las carreras
router.get('/:id', getCareersByIdHandler); // Ruta para obtener una carrera usando el ID

module.exports = router;
