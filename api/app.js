const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

app.use('/',)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

