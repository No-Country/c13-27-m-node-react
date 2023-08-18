const getAllUsersController = require('../controllers/users');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = getAllUsersController();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllUsers;
