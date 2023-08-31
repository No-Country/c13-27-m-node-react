const express = require('express');
const router = express.Router();

// Importo los handlers de estudiantes
const { homePageHandler } = require('../handlers/homePageHandler');

router.get('/', homePageHandler);

module.exports = router;
