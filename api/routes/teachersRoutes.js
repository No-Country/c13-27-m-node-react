const express = require('express');
const router = express.Router();

// Importo los handlers de profesores
const {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
} = require('../handlers/teachersHandlers');

router.get('/allTeachers', getAllTeachersHandler); // Ruta para obtener todos los usuarios
router.get('/teachersLogin', teacherLoginHandler);
router.post('/registerTeacher', registerTeacherHandler); // Ruta a la que se envia el form de registro de profesor completado

module.exports = router;
