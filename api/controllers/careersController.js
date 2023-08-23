const CareerModel = require('../models/careerModel'); // Llama al modelo CareerModel

const getAllCareersController = async (req, res) => {
  const careers = await CareerModel.find({}); // Todos las carreras de la DB
  if (!careers) throw new Error('No hay información disponible');
  return careers;
};

const getCareerByIdController = async (req, res) => {
  const { id } = req.params;
  const careers = await CareerModel.findById(id).populate('students');
  if (!careers) throw new Error('No hay información disponible');
  return careers;
};

module.exports = {
  getAllCareersController,
  getCareerByIdController,
};
