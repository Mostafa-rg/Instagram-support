const createHttpErrors = require("http-errors");
const jwt = require("jsonwebtoken")

async function Authorization(req, res, next){
    try {
        let token = null
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1]
        }
        if(!token) throw new createHttpErrors.Unauthorized("Invalid token");
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded
        return next()
    } catch (error) {
        next(error)
    }
};

module.exports = Authorization;