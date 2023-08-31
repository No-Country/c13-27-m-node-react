const homePageHandler = async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) throw new Error('No estas logueado');

    res.json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  homePageHandler,
};
