const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Configuración de la ruta para subir archivos
app.post('/', upload.single('pdfFile'), async (req, res) => {
  const { assignmentId } = req.body;
  try {
    if (!req.file) {
      throw new Error('Debes seleccionar un archivo PDF.');
    }

    const fileName = `${Date.now()}_${req.file.originalname}`;

    // Encuentra la asignación por su ID y agrega el nombre del archivo a la matriz de fileNames
    const assignment = await mongoose
      .model('Assignment')
      .findById(assignmentId);

    if (!assignment) {
      return res.status(404).send('Asignación no encontrada.');
    }

    assignment.fileNames.push(fileName); // Actualiza el documento de Mongoose con el nombre del archivo PDF
    await assignment.save();

    res.send(
      'Archivo PDF subido exitosamente y nombre guardado en la asignación.'
    );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send('Error al guardar el nombre del archivo en la asignación.');
  }
});

module.exports = app;
