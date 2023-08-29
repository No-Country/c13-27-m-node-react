const joi = require('joi');

const loginSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
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

// const Joi = require('joi');

// const schema = Joi.object({
//   username: Joi.string().alphanum().min(3).max(30).required(),

//   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//   repeat_password: Joi.ref('password'),

//   access_token: [Joi.string(), Joi.number()],

//   birth_year: Joi.number().integer().min(1900).max(2013),

//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ['com', 'net'] },
//   }),
// })
//   .with('username', 'birth_year')
//   .xor('password', 'access_token')
//   .with('password', 'repeat_password');

module.exports = {
  loginSchema,
  registrySchema,
};
