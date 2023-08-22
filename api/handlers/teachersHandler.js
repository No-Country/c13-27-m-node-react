const teacherRegistry = require('../controllers/teachers.js');

const teacherRegistryHandler = async (req, res) => {
    try {
        const teacher = req.body;
        const registry = await teacherRegistry(teacher);
        res.send(registry);
    } catch (error) {
        res.status(500).json("Error al crear el usuario")
    }
}

module.exports = {
    teacherRegistryHandler
};