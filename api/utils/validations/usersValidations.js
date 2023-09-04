const joi = require('joi');

const loginSchema = joi
  .object({
    dni: joi
      .string()
      .pattern(new RegExp(/^[0-9]+$/i))
      .min(5)
      .required(),
    password: joi.string().required(),
    check: joi.string().required(),
  })
  .messages({
    required: 'El campo {key} es obligatorio',
    min: 'El campo {key} debe tener al menos {min} caracteres',
    pattern: 'El campo {key} debe cumplir con el patrón {pattern}',
  });

const registrySchema = joi
  .object({
    dni: joi
      .string()
      .pattern(new RegExp(/^[0-9]*$/))
      .required(),
    firstName: joi
      .string()
      .pattern(new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/))
      .required(),
    email: joi
      .string()
      .pattern(new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/))
      .required(),
    lastName: joi
      .string()
      .pattern(new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/))
      .required(),
    password: joi.string().required(),
    check: joi.string()
    // passwordConfirm: joi.ref('password'),
  })
  // .with('password', 'repeat_password')
  // .alias('passwordConfirm', 'repeat_password')
  .messages({
    required: 'El campo {key} es obligatorio',
    min: 'El campo {key} debe tener al menos {min} caracteres',
    pattern: 'El campo {key} debe cumplir con el patrón {pattern}',
    email: 'El campo {key} no es un correo electrónico válido',
  });

module.exports = {
  loginSchema,
  registrySchema,
};
