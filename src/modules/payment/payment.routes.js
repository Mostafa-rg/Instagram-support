const paymentController = require("./payment.controller");
const router = require("express").Router();

router.post("/payment", paymentController.paymentGateway);
router.post("/verify", paymentController.verifyPayment);

module.exports = {
    PaymentRoutes: router
}