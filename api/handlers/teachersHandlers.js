const AssignmentModel = require('../models/assignmentModel'); // Llama al modelo AssignmentModel

const {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
  getTeacherByIdController,
  teacherSelectionController,
} = require('../controllers/teachersController');

const {
  loginSchema,
  registrySchema,
} = require('../utils/validations/usersValidations');

const getAllTeachersHandler = async (req, res) => {
  let { page, limit } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  try {
    const response = await getAllTeachersController(page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const teacherLoginHandler = async (req, res) => {
  const { dni, password, check } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) throw new Error(error);
  try {
    const login = await teacherLoginController(dni, password, check);
    req.session.user = {
      dni,
      role: check,
    }; // guardo el usuario logueado en la sesion
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerTeacherHandler = async (req, res) => {
  const { firstName, lastName, password, email, dni } = req.body;
  const { error } = registrySchema.validate(req.body);
  if (error) throw new Error(error);
  const newTeacher = {
    firstName,
    lastName,
    password,
    email,
    dni,
  };
  try {
    const response = await registerTeacherController(newTeacher);
    //valido que el profesor se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getTeacherByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await getTeacherByIdController(id);
    res.send(teacher);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const teacherSelectionHandler = async (req, res) => {
  const { id } = req.params;
  const { assignments } = req.body;
  try {
    // Uso los nombres de materias para buscar su ID
    const assignmentObjectIds = await AssignmentModel.find({
      name: { $in: assignments },
    }).distinct('_id');
    console.log(assignmentObjectIds);

    const response = await teacherSelectionController(id, assignmentObjectIds);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.mesage);
  }
};

module.exports = {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
  getTeacherByIdHandler,
  teacherSelectionHandler,
};
