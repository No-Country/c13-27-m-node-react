const getAllUsersController = require('../controllers/users');

const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsersController();
    res.send(allUsers);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAllUsersHandler;
