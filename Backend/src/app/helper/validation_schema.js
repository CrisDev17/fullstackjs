const Joi = require('joi');

const authSchema = Joi.object({
    username : Joi.string().alphanum().min(5).max(20).required(),
    email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password : Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

const validateBody = (authSchema) => {
    return (req,res,next) => {
        const validationResult = authSchema.validate(req.body, {abortEarly: false});
        res.data = validationResult;
        next()
    }
}
module.exports = {
    authSchema,
    validateBody
}