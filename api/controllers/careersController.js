const CareerModel = require('../models/careerModel'); // Llama al modelo CareerModel

const getAllCareersController = async (req, res) => {
  try {
    const careers = await CareerModel.find({}); // Todos las carreras de la DB
    if (!careers) throw new Error('No hay información disponible');

    res.status(200).json(careers);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getCareerByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const careers = await CareerModel.findById(id).populate('students');
    if (!careers) throw new Error('No hay información disponible');

    res.status(200).json(careers);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = {
  getAllCareersController,
  getCareerByIdController,
};
