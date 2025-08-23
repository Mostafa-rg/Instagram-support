const { default: mongoose} = require("mongoose");

const PlanSchema = new mongoose.Schema({
    title: {type: String, required: true},
    duration: {type: Number, required: true},
    price: {type: Number, required: true},
    isActive: {type: Boolean, default: true},
}, {timestamps: true});

module.exports = {
    PlanModel: mongoose.model("plan", PlanSchema)
}