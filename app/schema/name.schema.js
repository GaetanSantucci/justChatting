import joi from 'joi';
const Joi = joi;

// - min 4 char.
// - max 15 char.
// - maj first letter
// - no special character but "-"
const nameSchema = Joi.object({
    pseudo: Joi.string().pattern(new RegExp('^[A-Z][a-zA-Z-]{3,14}$')).required() // format for pseudo
});

export { nameSchema };