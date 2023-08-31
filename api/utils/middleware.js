// Middleware para chequear si está logueado
module.exports.requerirLogin = (req, res, next) => {
  if (!req.session.dni) {
    // Si no hay dni en sesion, enviar a login
    return res.redirect('http://localhost:3000/login');
  } else {
    next();
  }
};

// Middleware para chequear permisos de profesor
module.exports.verificarProfesor = (req, res, next) => {
  if (req.session.role !== 'teacher') {
    throw new Error('No tiene permiso para acceder a la ruta');
  } else {
    next();
  }
};
