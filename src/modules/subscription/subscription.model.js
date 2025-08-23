const { default: mongoose, Types } = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    userId: {type: Types.ObjectId, ref: "user", required: true},
    startDate: {type: Date, default: Date.now},
    endDate: {type: Date, required: true},
    isActive: {type: Boolean, default: true}
});

module.exports = {
    SubscriptionModel : mongoose.model("subscription", SubscriptionSchema)
}