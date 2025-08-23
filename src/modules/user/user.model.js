const { default: mongoose, Types } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    fullName: {type: String, required: false},
    accessToken: {type: String},
    phone: {type: String, required: false},
    role: {type: String, default: "user"},
    subscription: {type: Types.ObjectId, ref: "subscription",default: null}
});

module.exports = {
    UserModel : mongoose.model("user", userSchema)
}