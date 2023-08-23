const bcrypt = require('bcrypt');

// funcion que cifra una contraseña
const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const validPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

module.exports = {
  createHash,
  validPassword,
};
