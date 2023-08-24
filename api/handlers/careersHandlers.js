const {
  getAllCareersController,
  getCareerByIdController,
} = require('../controllers/careersController');

const getAllCareersHandler = async (req, res) => {
  try {
    const allCareers = await getAllCareersController();
    res.send(allCareers);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCareersByIdHandler = async (req, res) => {
  try {
    const career = await getCareerByIdController(req);
    res.send(career);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllCareersHandler, getCareersByIdHandler };
