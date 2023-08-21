const User = require('../models/usersModels'); // Llama al modelo User

// function getAllUsersController() {
//   const message = 'Este es un mensaje de prueba al obtener todos los usuarios';
//   return message;
// }

const getAllUsersController = async (req, res) => {
  const users = await User.find({}); // Todos los resultados de la DB
  res.send(users);
};

module.exports = getAllUsersController;
