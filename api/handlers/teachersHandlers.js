const {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
} = require('../controllers/teachersController');

const getAllTeachersHandler = async (req, res) => {
  try {
    const allTeachers = await getAllTeachersController();
    res.send(allTeachers);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const teacherLoginHandler = async (req, res) => {
  const { email, password, check } = req.body;
  try {
    const login = await teacherLoginController(email, password, check);
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerTeacherHandler = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      password,
      email,
      dni,
      dob,
      address,
      assignments,
    } = req.body;

    const newTeacher = {
      firstName,
      lastName,
      password,
      email,
      dni,
      dob,
      address,
      assignments,
    };

    const response = await registerTeacherController(newTeacher);
    //valido que el profesor se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.send('Usted se registró correctamente');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
};
