const express = require('express');
const router = express.Router();

router.post('registry', teacherRegistryHandler);

module.exports = router;