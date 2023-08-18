const getAllUsersController = require('../controllers/users');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = getAllUsersController();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAllUsers;
