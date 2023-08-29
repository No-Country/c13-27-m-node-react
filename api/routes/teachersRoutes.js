const express = require('express');
const router = express.Router();

// Importo los handlers de profesores
const {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
  getTeacherByIdHandler,
} = require('../handlers/teachersHandlers');

router.get('/allTeachers', getAllTeachersHandler); // Ruta para obtener todos los usuarios
router.post('/teachersLogin', teacherLoginHandler);
router.get('/:id', getTeacherByIdHandler);
router.post('/registerTeacher', registerTeacherHandler); // Ruta a la que se envia el form de registro de profesor completado

module.exports = router;
