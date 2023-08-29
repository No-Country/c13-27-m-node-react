const joi = require('joi');

const loginSchema = joi.object({
  dni: joi
    .string()
    .pattern(new RegExp(/^[0-9]+$/i))
    .min(5)
    .required(),
  password: joi.string().required(),
});

const registrySchema = joi
  .object({
    dni: joi
      .string()
      .pattern(new RegExp(/^[0-9]*$/))
      .required(),
    firstname: joi
      .string()
      .pattern(new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/))
      .required(),
    email: joi
      .string()
      .pattern(new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/))
      .required(),
    lastname: joi
      .string()
      .pattern(new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/))
      .required(),
    password: joi.string().required(),
    passwordConfirm: joi.ref('password'),
    termsandconditions: '',

    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .with('password', 'repeat_password');

module.exports = {
  loginSchema,
  registrySchema,
};
