const autoBind = require("auto-bind");
const { UserModel } = require("../user/user.model");
const createHttpErrors = require("http-errors");
const jwt = require("jsonwebtoken")
class AuthService{
    #model
    constructor(){
        autoBind(this);
        this.#model = UserModel
    }

    async regsiter(username, password, phone, email){
        const user = await this.#model.findOne({username});
        if(user) throw new createHttpErrors.Conflict("user already exist");
        const newUser = await this.#model.create({
            username, password, phone, email
        })
        return newUser
    };
    async login(username, password){
        const user = await this.existUser(username);
        if(user.password !== password) throw new createHttpErrors.Unauthorized("username or passowrd is incorrect");
        const accessToken = await this.signToken({id: user._id, role: "user"})
        user.accessToken = accessToken
        await user.save()
        return user
    }
    async existUser(username){
        const user = await this.#model.findOne({username});
        if(!user) throw new createHttpErrors.NotFound("username or passowrd is incorrect");
        return user
    }

    async signToken(payload){
        return jwt.sign(payload, process.env.JWT_SECRET_KEY,{expiresIn: "1y"})
    }
}


module.exports = new AuthService