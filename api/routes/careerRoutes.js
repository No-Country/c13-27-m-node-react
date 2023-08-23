const express = require('express');
const router = express.Router();

// Importo los handlers de materias
const {
    getAllCareersHandler, 
    getCareersByIdHandler
} = require('../handlers/careersHandlers');

router.get('/allCareers', getAllCareersHandler); // Ruta para obtener todos las carreras (ver como integrar con alumnos y profesores)
router.get('/careers/:id', getCareersByIdHandler); // Ruta para obtener una carrera usando el ID

module.exports = router;