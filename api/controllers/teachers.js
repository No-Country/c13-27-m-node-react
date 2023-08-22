const User = require('../models/usersModels');

const teacherRegistry = async (teacher) => {
    const teacherRegistred = await User.create();
    if(!teacherRegistred) throw new Error('No se pudo registar al profesor');
    return teacherRegistred;
}

module.exports = {
    teacherRegistry
}