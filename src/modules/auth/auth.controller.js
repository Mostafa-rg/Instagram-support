const autoBind = require("auto-bind");
const authService = require("./auth.service");
const { registerSchema, loginSchema } = require("../../common/validation/auth.validation");

class AuthController {
    #service
    constructor() {
        autoBind(this);
        this.#service = authService
    }
    async register(req, res, next){
        try {
            await registerSchema.validateAsync(req.body);
            const {username, password, phone, email} = req.body;
            await this.#service.regsiter(username, password, phone, email)
            return res.json({
                message: "success register"
            })

        } catch (error) {
            next(error)
        }
    }
    async login(req, res, next) {
        try {
            await loginSchema.validateAsync(req.body);
            const {username, password} =  req.body;
            await this.#service.login(username, password);
            return res.json({
                message: "success login"
            })
        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
};

module.exports = new AuthController