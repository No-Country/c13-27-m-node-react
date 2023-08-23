const {
  getAllCareersController,
  getCareerByIdController,
} = require('../controllers/careersController');

const getAllCareersHandler = async (req, res) => {
  try {
    const allCareers = await getAllCareersController();
    if (!allCareers) {
      return res.status(404).json({ error: 'No hay información disponible' });
    }

    res.json(allCareers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCareersByIdHandler = async (req, res) => {
  try {
    const career = await getCareerByIdController(req);
    if (!careers) {
      return res.status(404).json({ error: 'No hay información disponible' });
    }

    res.json(career);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllCareersHandler, getCareersByIdHandler };
