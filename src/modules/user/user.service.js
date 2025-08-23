const autoBind = require("auto-bind");
const { UserModel } = require("./user.model");
const createHttpErrors = require("http-errors");


class UserService {
    #model
    constructor() {
        autoBind(this);
        this.#model = UserModel
    }
    async getProfile(userId){
        const user = await this.#model.findById(userId, {__v: 0}).populate([{path: "subscription", select: {__v: 0,userId: 0, _id: 0}}]);
        return user
    }

    async editProfile(userId, data){
        await this.findUserById(userId);
        const updateResult = await this.#model.updateOne({_id: userId}, {
            $set: data
        });
        if(!updateResult.modifiedCount) throw new createHttpErrors.InternalServerError("update is not successfull");
    };
    async findUserById(userId){
        const user = await this.#model.findById(userId, {__v: 0});
        if(!user) throw new createHttpErrors.NotFound("User not found");
        return user
    }

}

module.exports = new UserService;