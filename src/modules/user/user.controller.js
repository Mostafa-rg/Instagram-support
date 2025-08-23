const autoBind = require("auto-bind");
const userService = require("./user.service");
const { editProfileSchema } = require("../../common/validation/auth.validation");

class UserController {
    #Service
    constructor(){
        autoBind(this)
        this.#Service = userService;
        
    }

    async whoami(req, res, next){
        try {
            const userId = req.user.id;
            const user = await this.#Service.getProfile(userId)
            res.json({
                user
            })
        } catch (error) {
            next(error)
        }
    };
    async editProfile(req, res, next){
        try {
            const userId = req.user.id;
            const data = req.body
            await editProfileSchema.validateAsync(data)
            await this.#Service.editProfile(userId, data)
            res.json({
                message: "updated successfuly"
            })
        } catch (error) {
            next(error)
        }
    };
    async removeUser(){
        
    }

};

module.exports = new UserController;