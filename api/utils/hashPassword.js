const bcrypt = require('bcrypt');

// funcion que cifra una contraseña
const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = {
  createHash,
};
