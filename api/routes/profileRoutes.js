const express = require('express');
const router = express.Router();

// Importo los handlers de estudiantes
const { profileHandler } = require('../handlers/profileHandler');

router.get('/', profileHandler);

module.exports = router;
