const { default: mongoose, Types} = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    verify: {type: Boolean, default: false},
    userId: {type: Types.ObjectId, ref: "user", required: true},
    amount: {type: Number, required: true},
    authority: {type: String},
    refId: {type: String},
    invoiceNumber: {type: String, unique: true},
    description: {type: String, default: "خرید اشتراک"}
}, {timestamps: true});

module.exports = {
    PaymentModel: mongoose.model("payment", PaymentSchema)
}


