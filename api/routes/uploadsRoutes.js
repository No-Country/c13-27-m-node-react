const express = require('express');

const multer = require('multer');
const path = require('path');

const app = express();

// Configuración de Multer para almacenar los archivos en la carpeta 'uploads'
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
app.post('/', upload.single('pdfFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Debes seleccionar un archivo PDF.');
  }

  res.send('Archivo PDF subido exitosamente.');
});

module.exports = app;
