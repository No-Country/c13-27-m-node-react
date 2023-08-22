const express = require('express');
const router = express.Router();

const {teacherRegistryHandler} = require('../handlers/teachersHandler');

router.post('registry', teacherRegistryHandler);

module.exports = router;