const Joi = require("@hapi/joi");
const createHttpErrors = require("http-errors")
const registerSchema = Joi.object({
    email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).min(7).max(40).error(createHttpErrors.BadRequest("email is not correct")),
    username: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9_]+$/).error(createHttpErrors.BadRequest("username is not correct")),
    password: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/\\|`~]+$/).error(createHttpErrors.BadRequest("password is not correct")),
    phone: Joi.string().regex(/^(?:\+98|0)?9\d{9}$/).error(createHttpErrors.BadRequest("phone is not correct")),
});
const loginSchema = Joi.object({
    email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).min(7).max(40).error(createHttpErrors.BadRequest("email is not correct")),
    username: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9_]+$/).error(createHttpErrors.BadRequest("username is not correct")),
    password: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/\\|`~]+$/).error(createHttpErrors.BadRequest("password is not correct")),
    phone: Joi.string().regex(/^(?:\+98|0)?9\d{9}$/).error(createHttpErrors.BadRequest("phone is not correct")),
});

const editProfileSchema = Joi.object({
    email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).min(7).max(40).error(createHttpErrors.BadRequest("email is not correct")),
    username: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9_]+$/).error(createHttpErrors.BadRequest("username is not correct")),
    password: Joi.string().min(4).max(30).regex(/^[a-zA-Z0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/\\|`~]+$/).error(createHttpErrors.BadRequest("password is not correct")),
    phone: Joi.string().regex(/^(?:\+98|0)?9\d{9}$/).error(createHttpErrors.BadRequest("phone is not correct")),
    fullName: Joi.string().min(3).max(80).regex(/^(?:[a-zA-Z\u0600-\u06FF]+(?:\s[a-zA-Z\u0600-\u06FF]+)*)$/
).error(createHttpErrors.BadRequest("fullname is not correct")),
});
const planValidationSchema = Joi.object({
    title: Joi.string().error(createHttpErrors.BadRequest("email is not correct")),
    duration: Joi.number().error(createHttpErrors.BadRequest("duration is not correct")),
    price: Joi.number().error(createHttpErrors.BadRequest("price is not correct")),
    isActive: Joi.boolean().error(createHttpErrors.BadRequest("activation must be boolean"))
});

module.exports = {
    registerSchema,
    loginSchema,
    editProfileSchema,
    planValidationSchema
}