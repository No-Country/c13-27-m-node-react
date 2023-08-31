const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuración de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Ruta para subir archivos PDF
app.post('/', upload.single('pdfFile'), (req, res) => {
  res.json({ message: 'Archivo subido exitosamente' });
});

module.exports = app;
