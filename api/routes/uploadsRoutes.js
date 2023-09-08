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

    // Encuentra la materia por su ID y agrega el nombre del archivo a la matriz de fileNames
    const assignment = await mongoose
      .model('Assignment')
      .findById(assignmentId);

    if (!assignment) {
      return res.status(404).send('Materia no encontrada.');
    }

    assignment.fileNames.push(fileName); // Actualiza el documento de Mongoose con el nombre del archivo PDF
    await assignment.save();

    res.send(fileName);
  } catch (error) {
    res
      .status(500)
      .send('Error al guardar el nombre del archivo en la materia.');
  }
});

app.get('/allClasses', async (req, res) => {
  const { assignmentId } = req.query;
  try {
    const assignment = await mongoose
      .model('Assignment')
      .findById(assignmentId);

    if (!assignment) {
      throw new Error('Materia no encontrada.');
    }

    const files = assignment.fileNames.map((fileName) => fileName);

    res.send(files);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/downloadFile/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, '../uploads', fileName);

  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  res.sendFile(filePath);
});

app.post('/entrega', upload.single('pdfFile'), async (req, res) => {
  const { assignmentId, studentId } = req.body;
  try {
    if (!req.file) {
      throw new Error('Debes seleccionar un archivo PDF.');
    }

    const assignment = await mongoose
      .model('Assignment')
      .findById(assignmentId);

    if (!assignment) {
      return res.status(404).send('Materia no encontrada.');
    }

    const fileName = `${Date.now()}_${req.file.originalname}`;

    assignment.events.push({
      date: Date.now(),
      type: 'Entrega',
      eventDetails: [
        {
          student: studentId,
          file: fileName,
        },
      ],
    });

    await assignment.save();

    res.send(fileName);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;

// Falta ruta de todas las entregas de un estudiante